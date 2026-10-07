import { OrderInfoUI } from '@ui';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { fetchFeeds, fetchUserOrders } from '../../services/feed-slice';
import { useSelector, useDispatch } from '../../services/store';
import { Preloader } from '../ui/preloader';

import type { TIngredient } from '@utils-types';
import type { FC } from 'react';

export const OrderInfo: FC = () => {
  const { number } = useParams<{ number: string }>();
  const dispatch = useDispatch();

  const { orders, userOrders } = useSelector((state) => state.feed);
  const { ingredients } = useSelector((state) => state.ingredients);

  useEffect(() => {
    // Подгружаем общую ленту и заказы пользователя, если массивы пустые
    if (!orders.length) {
      dispatch(fetchFeeds());
    }
    if (!userOrders.length) {
      dispatch(fetchUserOrders());
    }
  }, [dispatch, orders.length, userOrders.length]);

  // Ищем заказ сначала в общей ленте, затем в личных заказах пользователя
  const orderData = useMemo(() => {
    const num = Number(number);
    return (
      orders.find((item) => item.number === num) ||
      userOrders.find((item) => item.number === num)
    );
  }, [orders, userOrders, number]);

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = Record<string, TIngredient & { count: number }>;

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1,
            };
          }
        } else {
          acc[item].count++;
        }
        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total,
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};