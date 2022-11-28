import { stopSubmit } from 'redux-form';

import { authAPI } from '../api/api';

import { AppThunk } from './store';

const USER_DATA = 'auth/SET-USER-DATA';

const initialState: initialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  // eslint-disable-next-line default-param-last
  state: initialStateType = initialState,
  action: authReducerType,
): initialStateType => {
  switch (action.type) {
    case USER_DATA: {
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
};
export const setAuthUserData = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
) => {
  return {
    type: USER_DATA,
    data: { userId, login, email, isAuth },
  };
};

export const authMeTC = (): AppThunk => async dispatch => {
  const response = await authAPI.me();

  if (response.resultCode === 0) {
    const { id, login, email } = response.data;

    dispatch(setAuthUserData(id, login, email, true));
  }
};
export const loginTC =
  (email: string, password: string, rememberMe: boolean): AppThunk =>
  async dispatch => {
    const response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
      dispatch(authMeTC());
    } else {
      dispatch(stopSubmit('login', { _error: response.messages[0] }));
    }
  };
export const logoutTC = (): AppThunk => async dispatch => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

type initialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
export type authReducerType = ReturnType<typeof setAuthUserData>;
