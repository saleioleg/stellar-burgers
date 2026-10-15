import { useEffect, useMemo } from 'react';
import type { FC } from 'react'
import { useParams } from 'react-router-dom';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { useDispatch, useSelector } from '../../services/store';
import { getOrderByNumber } from '../../services/order-slice';
import type { TIngredient, TOrder } from '@utils-types';

export const OrderInfo: FC = () => {
  const { number } = useParams<{ number: string }>();
  const dispatch = useDispatch();

  // 1. Ингредиенты из стора
  const ingredients: TIngredient[] = useSelector(
    (state) => state.ingredients.ingredients
  );

  // 2. Список заказов из имеющейся ленты (если пользователя принесло с этой страницы)
  const feedOrders: TOrder[] = useSelector(
    (state) => state.feed?.orders || []
  );

  // 3. Отдельно загруженный заказ по номеру из order-slice
  const fetchedOrder = useSelector((state) => state.order?.orderByNumber);

  // Ищем заказ сначала в загруженном списке feed, иначе берем отдельно загруженный заказ
  const orderData = useMemo(() => {
    if (!number) return null;
    const orderNum = Number(number);

    return (
      feedOrders.find((item: TOrder) => item.number === orderNum) ||
      (fetchedOrder?.number === orderNum ? fetchedOrder : null)
    );
  }, [number, feedOrders, fetchedOrder]);

  useEffect(() => {
    // Запрашиваем заказ с сервера через thunk только если его ещё нет в Redux-сторе
    if (number && !orderData) {
      dispatch(getOrderByNumber(Number(number)));
    }
  }, [dispatch, number, orderData]);

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item: string) => {
        if (!acc[item]) {
          const ingredient = ingredients.find(
            (ing: TIngredient) => ing._id === item
          );
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
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
      (acc: number, item: TIngredient & { count: number }) =>
        acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};