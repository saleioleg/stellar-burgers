import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { orderBurgerApi } from '../utils/burger-api';
import { clearConstructor } from './constructor-slice';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { TOrder } from '@utils-types';

export type TOrderState = {
  orderRequest: boolean;
  orderModalData: TOrder | null;
  error: string | null;
};

const initialState: TOrderState = {
  orderRequest: false,
  orderModalData: null,
  error: null,
};

export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async (ingredientIds: string[], { dispatch }) => {
    const data = await orderBurgerApi(ingredientIds);
    dispatch(clearConstructor());
    return data.order;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrderModal: (state) => {
      state.orderModalData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.orderRequest = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action: PayloadAction<TOrder>) => {
        state.orderRequest = false;
        state.orderModalData = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message || 'Ошибка оформления заказа';
      });
  },
});

export const { resetOrderModal } = orderSlice.actions;
export default orderSlice.reducer;
