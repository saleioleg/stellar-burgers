import { combineReducers } from '@reduxjs/toolkit';

import burgerConstructorReducer from './constuctor-slice';
import feedReducer from './feed-slice';
import ingredientsReducer from './ingredient-slice';
import orderReducer from './order-slice';
import userReducer from './user-slice';

export const rootReducer = combineReducers({
  // TODO: Собрать здесь редьюсеры слайсов
  user: userReducer,
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  feed: feedReducer,
});
