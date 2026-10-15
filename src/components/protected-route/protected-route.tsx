import type { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { Preloader } from '../ui/preloader';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactElement;
};

export const ProtectedRoute = ({
  onlyUnAuth = false,
  children
}: TProtectedRouteProps) => {
  const location = useLocation();
  const { user, isAuthChecked } = useSelector((state) => state.user);

  // Пока не завершилась проверка авторизации, показываем индикатор загрузки
  if (!isAuthChecked) {
    return <Preloader />;
  }

  // Если роут предназначен только для неавторизованных (например, /login, /register),
  // а пользователь уже авторизован — перенаправляем его назад или на главную
  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate to={from} replace />;
  }

  // Если роут защищённый, а пользователь не авторизован — перенаправляем на /login,
  // сохраняя текущий адрес в state для последующего возврата
  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};