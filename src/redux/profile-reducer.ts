// eslint-disable-next-line import/no-extraneous-dependencies
import { v1 } from 'uuid';

import { profileAPI } from '../api/api';

import { AppThunk } from './store';

const initialState: initialProfileStateType = {
  status: '',
  profile: null,
  post: [
    { id: v1(), message: 'Hi,how are you?', like: 12 },
    { id: v1(), message: 'It is my first post', like: 11 },
  ],
};

export const profileReducer = (
  state: initialProfileStateType = initialState,
  action: profileReducerType,
): initialProfileStateType => {
  switch (action.type) {
    case 'ADD-POST': {
      return {
        ...state,
        post: [...state.post, { id: v1(), message: action.value, like: 0 }],
      };
    }

    case 'SET-PROFILE-USER': {
      return { ...state, profile: action.profile };
    }
    case 'SET-PROFILE-USER-STATUS': {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export const setUserProfile = (profile: ProfileUsersType) => {
  return {
    type: 'SET-PROFILE-USER',
    profile,
  } as const;
};
export const AddPostAC = (value: any) => {
  return {
    type: 'ADD-POST',
    value,
  } as const;
};
export const setUserProfileStatus = (status: string) => {
  return {
    type: 'SET-PROFILE-USER-STATUS',
    status,
  } as const;
};

export const setUserProfileStatusTC = (status: string) => (dispatch: any) => {
  profileAPI.setUserProfileStatus(status).then(() => {
    dispatch(setUserProfileStatus(status));
  });
};
export const getUserProfileTC = (userId: string) => (dispatch: any) => {
  profileAPI
    .getUserProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    })
    .catch(err => console.log(`getUserProfile${err}`));
};
export const getUserProfileStatusTC =
  (userId: string): AppThunk =>
  async dispatch => {
    try {
      const status = await profileAPI.getUserProfileStatus(+userId);

      dispatch(setUserProfileStatus(status));
    } catch (err) {
      console.log(err);
    }
  };

type ProfileUsersType = {
  aboutMe: string;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  photos: {
    small: string | null;
    large: string | null;
  };
};
export type TypePost = {
  id: string;
  message: string;
  like: number;
};
export type TypeProfilePage = {
  status: string;
  profile: ProfileUsersType | null;
  post: Array<TypePost>;
};
export type initialProfileStateType = TypeProfilePage;
export type profileReducerType =
  | AddPostAction
  | setUserProfileType
  | getUserProfileStatusType;
export type getUserProfileStatusType = ReturnType<typeof setUserProfileStatus>;
export type setUserProfileType = ReturnType<typeof setUserProfile>;
export type AddPostAction = ReturnType<typeof AddPostAC>;
