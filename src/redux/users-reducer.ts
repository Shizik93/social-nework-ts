import { usersAPI } from '../api/api';

import { AppThunk } from './store';

const SUBSCRIBE_USER = 'users/SUBSCRIBE-USER';
const UNSUBSCRIBE_USER = 'users/UNSUBSCRIBE-USER';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_LOADING = 'users/TOGGLE-IS-LOADING';
const TOGGLE_IS_SUBSCRIBE = 'users/TOGGLE-IS-SUBSCRIBE';

const initialState: initialUsersStateType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 20,
  currentPage: 1,
  isLoading: false,
  subscribeUsers: [],
};

export const usersReducer = (
  // eslint-disable-next-line default-param-last
  state: initialUsersStateType = initialState,
  action: usersReducerType,
): initialUsersStateType => {
  switch (action.type) {
    case SUBSCRIBE_USER: {
      return {
        ...state,
        users: state.users.map(u => (u.id === action.id ? { ...u, followed: true } : u)),
      };
    }
    case UNSUBSCRIBE_USER: {
      return {
        ...state,
        users: state.users.map(u => (u.id === action.id ? { ...u, followed: false } : u)),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOGGLE_IS_LOADING: {
      return { ...state, isLoading: action.boolean };
    }
    case TOGGLE_IS_SUBSCRIBE: {
      return {
        ...state,
        subscribeUsers: action.boolean
          ? [...state.subscribeUsers, action.id]
          : state.subscribeUsers.filter(id => id !== action.id),
      };
    }
    default:
      return state;
  }
};

export const Subscribe = (id: number) => {
  return {
    type: SUBSCRIBE_USER,
    id,
  } as const;
};
export const UnSubscribe = (id: number) => {
  return {
    type: UNSUBSCRIBE_USER,
    id,
  } as const;
};
export const SetUsers = (users: Array<UserType>) => {
  return {
    type: SET_USERS,
    users,
  } as const;
};
export const SetCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const;
};
export const SetTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  } as const;
};
export const SetIsLoading = (boolean: boolean) => {
  return {
    type: TOGGLE_IS_LOADING,
    boolean,
  } as const;
};
export const SetIsSubscribe = (boolean: boolean, id: number) => {
  return {
    type: TOGGLE_IS_SUBSCRIBE,
    boolean,
    id,
  } as const;
};

export const getUsersTC =
  (currentPage: number, pageSize: number): AppThunk =>
  async dispatch => {
    try {
      dispatch(SetIsLoading(true));
      const data = await usersAPI.getUsers(currentPage, pageSize);

      dispatch(SetIsLoading(false));
      dispatch(SetUsers(data.items));
      dispatch(SetTotalUsersCount(data.totalCount));
    } catch (err) {
      console.log(err);
    }
  };

export const SetSubscribe =
  (id: number): AppThunk =>
  async dispatch => {
    try {
      dispatch(SetIsSubscribe(true, id));
      const resultCode = await usersAPI.deleteSubscribe(id);

      if (resultCode === 0) {
        dispatch(UnSubscribe(id));
        dispatch(SetIsSubscribe(false, id));
      }
    } catch (err) {
      console.log(err);
    }
  };
export const SetUnsubscribe =
  (id: number): AppThunk =>
  async dispatch => {
    try {
      dispatch(SetIsSubscribe(true, id));
      const resultCode = await usersAPI.postSubscribe(id);

      if (resultCode === 0) {
        dispatch(Subscribe(id));
        dispatch(SetIsSubscribe(false, id));
      }
    } catch (err) {
      console.log(err);
    }
  };

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: null | string;
  photos: {
    small: null | string;
    large: null | string;
  };
  status: null | string;
  followed: boolean;
};
export type initialUsersStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isLoading: boolean;
  subscribeUsers: Array<number>;
};
export type usersReducerType =
  | ReturnType<typeof SetIsSubscribe>
  | ReturnType<typeof SetIsLoading>
  | ReturnType<typeof SetTotalUsersCount>
  | ReturnType<typeof SetCurrentPage>
  | ReturnType<typeof SetUsers>
  | ReturnType<typeof UnSubscribe>
  | ReturnType<typeof Subscribe>;
