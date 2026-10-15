import { IngredientsCategoryUI } from '@ui';
import { useMemo } from 'react';

import { useSelector } from '../../services/store';

import type { TIngredientsCategoryProps } from './type';
import type { TIngredient } from '@utils-types';

export const IngredientsCategory = ({
  title,
  titleRef,
  ingredients,
  ref,
}: TIngredientsCategoryProps): React.JSX.Element => {
  // Получаем состояние конструктора из Redux-стора
  const burgerConstructor = useSelector((state) => state.burgerConstructor);

  const ingredientsCounters = useMemo(() => {
    const { bun, ingredients } = burgerConstructor;
    const counters: Record<string, number> = {};

    // Считаем количество обычных ингредиентов (начинки, соусы)
    ingredients.forEach((ingredient: TIngredient) => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });

    // Булка всегда добавляется в количестве 2 штук (верх и низ)
    if (bun) counters[bun._id] = 2;

    return counters;
  }, [burgerConstructor]);

  return (
    <IngredientsCategoryUI
      title={title}
      titleRef={titleRef}
      ingredients={ingredients}
      ingredientsCounters={ingredientsCounters}
      ref={ref}
    />
  );
};