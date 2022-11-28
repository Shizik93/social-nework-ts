import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import ThunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { appReducer, AppReducerType } from './app-reducer';
import { authReducer, authReducerType } from './auth-reducer';
import { dialogsReducer, dialogsReducerType } from './dialogs-reducer';
import { profileReducer, profileReducerType } from './profile-reducer';
import { usersReducer, usersReducerType } from './users-reducer';

export type AppStateType = ReturnType<typeof reducers>;
const reducers = combineReducers({
  appReducer,
  profileReducer,
  dialogsReducer,
  usersReducer,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

export type AppActionsType =
  | AppReducerType
  | profileReducerType
  | dialogsReducerType
  | usersReducerType
  | authReducerType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppActionsType
>;

export default store;
