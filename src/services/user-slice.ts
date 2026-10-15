import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getUserApi,
  loginUserApi,
  registerUserApi,
  updateUserApi,
  logoutApi,
} from '../utils/burger-api';
import type { TUser } from '@utils-types';
import { deleteCookie, setCookie } from '../utils/cookie';
import type { TLoginData, TRegisterData } from '../utils/burger-api';

// 1. Проверка авторизации при старте приложения
export const checkUserAuth = createAsyncThunk(
  'user/checkUserAuth',
  async (_, { rejectWithValue }) => {
    const refreshToken = localStorage.getItem('refreshToken');

    // Если нет refreshToken, пользователь не был авторизован — сразу отклоняем
    if (!refreshToken) {
      return rejectWithValue('No refresh token found');
    }

    // Запрашиваем данные пользователя: getUserApi использует fetchWithRefresh, 
    // который сам обновит accessToken через refreshToken, если кука истекла
    return await getUserApi();
  }
);

// 2. Вход пользователя (Login)
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data: TLoginData) => {
    const res = await loginUserApi(data);
    setCookie('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return res.user;
  }
);

// 3. Регистрация пользователя (Register)
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (data: TRegisterData) => {
    const res = await registerUserApi(data);
    setCookie('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return res.user;
  }
);

// 4. Обновление профиля
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (data: Partial<TRegisterData>) => {
    const res = await updateUserApi(data);
    return res.user;
  }
);

// 5. Выход (Logout)
export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  try {
    await logoutApi();
  } finally {
    // Гарантированно очищаем локальные токены при любом исходе
    deleteCookie('accessToken');
    localStorage.removeItem('refreshToken');
  }
});

interface IUserState {
  user: TUser | null;
  isAuthChecked: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: null,
  isAuthChecked: false,
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // checkUserAuth
      .addCase(checkUserAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkUserAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthChecked = true;
        state.isLoading = false;
      })
      .addCase(checkUserAuth.rejected, (state, action) => {
        state.user = null;
        state.isAuthChecked = true;
        state.isLoading = false;
        state.error = (action.payload as string) || action.error.message || null;
      })

      // loginUser
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Login failed';
      })

      // registerUser
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Registration failed';
      })

      // updateUser
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Update failed';
      })

      // logoutUser
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.user = null;
      });
  }
});

export default userSlice.reducer;