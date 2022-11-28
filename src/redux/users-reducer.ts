import { usersAPI } from '../api/api';

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
    case 'SUBSCRIBE-USER': {
      return {
        ...state,
        users: state.users.map(u => (u.id === action.id ? { ...u, followed: true } : u)),
      };
    }
    case 'UNSUBSCRIBE-USER': {
      return {
        ...state,
        users: state.users.map(u => (u.id === action.id ? { ...u, followed: false } : u)),
      };
    }
    case 'SET-USERS': {
      return { ...state, users: [...action.users] };
    }
    case 'SET-CURRENT-PAGE': {
      return { ...state, currentPage: action.currentPage };
    }
    case 'SET-TOTAL-USERS-COUNT': {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case 'TOGGLE-IS-LOADING': {
      return { ...state, isLoading: action.boolean };
    }
    case 'TOGGLE-IS-SUBSCRIBE': {
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
    type: 'SUBSCRIBE-USER',
    id,
  } as const;
};
export const UnSubscribe = (id: number) => {
  return {
    type: 'UNSUBSCRIBE-USER',
    id,
  } as const;
};
export const SetUsers = (users: Array<UserType>) => {
  return {
    type: 'SET-USERS',
    users,
  } as const;
};
export const SetCurrentPage = (currentPage: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    currentPage,
  } as const;
};
export const SetTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount,
  } as const;
};
export const SetIsLoading = (boolean: boolean) => {
  return {
    type: 'TOGGLE-IS-LOADING',
    boolean,
  } as const;
};
export const SetIsSubscribe = (boolean: boolean, id: number) => {
  return {
    type: 'TOGGLE-IS-SUBSCRIBE',
    boolean,
    id,
  } as const;
};
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: any) => {
  dispatch(SetIsLoading(true));
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(SetIsLoading(false));
    dispatch(SetUsers(data.items));
    dispatch(SetTotalUsersCount(data.totalCount));
  });
};
export const SetSubscribe = (id: number) => (dispatch: any) => {
  dispatch(SetIsSubscribe(true, id));
  usersAPI.deleteSubscribe(id).then(resultCode => {
    if (resultCode === 0) {
      dispatch(UnSubscribe(id));
      dispatch(SetIsSubscribe(false, id));
    }
  });
};
export const SetUnsubscribe = (id: number) => (dispatch: any) => {
  dispatch(SetIsSubscribe(true, id));
  usersAPI.postSubscribe(id).then(resultCode => {
    if (resultCode === 0) {
      dispatch(Subscribe(id));
      dispatch(SetIsSubscribe(false, id));
    }
  });
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
  | FollowType
  | UnFollow
  | SetUsersType
  | SetCurrentPageType
  | SetTotalUsersCountType
  | SetIsLoadingType
  | SetIsSubscribeType;
export type SetIsSubscribeType = ReturnType<typeof SetIsSubscribe>;
export type SetIsLoadingType = ReturnType<typeof SetIsLoading>;
export type SetTotalUsersCountType = ReturnType<typeof SetTotalUsersCount>;
export type SetCurrentPageType = ReturnType<typeof SetCurrentPage>;
export type SetUsersType = ReturnType<typeof SetUsers>;
export type UnFollow = ReturnType<typeof UnSubscribe>;
export type FollowType = ReturnType<typeof Subscribe>;
