import { ProfileOrdersUI } from '@ui-pages';
import { useEffect } from 'react';

import { fetchUserOrders } from '../../services/feed-slice';
import { useSelector, useDispatch } from '../../services/store';

import type { FC } from 'react';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const { userOrders } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  return <ProfileOrdersUI orders={userOrders} />;
};
