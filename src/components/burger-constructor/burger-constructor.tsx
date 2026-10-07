import { BurgerConstructorUI } from '@ui';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { clearConstructor } from '../../services/constructor-slice';
import { placeOrder, resetOrderModal } from '../../services/order-slice';
import { useSelector, useDispatch } from '../../services/store';

import type { TConstructorIngredient } from '@utils-types';
import type { FC } from 'react';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const constructorItems = useSelector((state) => state.burgerConstructor);
  const { orderRequest, orderModalData } = useSelector((state) => state.order);

  const onOrderClick = (): void => {
    // Блокируем отправку, если нет булки или заказ уже отправляется
    if (!constructorItems.bun || orderRequest) return;

    // Если пользователь не авторизован, перенаправляем на страницу входа
    if (!user) {
      navigate('/login');
      return;
    }

    // Собираем массив ID ингредиентов (булка в начале + начинки + булка в конце)
    const ingredientIds = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((item: TConstructorIngredient) => item._id),
      constructorItems.bun._id,
    ];

    dispatch(placeOrder(ingredientIds));
  };

  const closeOrderModal = (): void => {
    dispatch(resetOrderModal());
    dispatch(clearConstructor());
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};