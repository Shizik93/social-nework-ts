// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

type logoutResType = {
  resultCode: number;
  messages: Array<string>;
  data: {};
};
type subscribeType = {
  resultCode: number;
  messages: [];
  data: object;
};
type DataType = {
  error: null | string;
  totalCount: number;
  items: Array<UserType>;
};
type AuthResponseType = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  messages: Array<string>;
  fieldsErrors: [];
  resultCode: number;
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

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    'API-KEY': 'a9f5b347-68da-4301-888d-541b1ac92546',
  },
});
const instancePost = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  data: {},
  withCredentials: true,
  headers: {
    'API-KEY': 'a9f5b347-68da-4301-888d-541b1ac92546',
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<DataType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  deleteSubscribe(id: number) {
    return instance.delete<subscribeType>(`follow/${id}`).then(response => {
      return response.data.resultCode;
    });
  },
  postSubscribe(id: number) {
    return instancePost.post<subscribeType>(`follow/${id}`).then(response => {
      return response.data.resultCode;
    });
  },
};

export const authAPI = {
  me() {
    return instance.get<AuthResponseType>(`auth/me`).then(response => {
      return response.data;
    });
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance
      .post<AuthResponseType>(`auth/login`, { email, password, rememberMe })
      .then(response => {
        return response.data;
      });
  },
  logout() {
    return instance.delete<logoutResType>('auth/login');
  },
};

export const profileAPI = {
  getUserProfile(userId: string) {
    return instance.get<ProfileUsersType>(`profile/${userId}`).then(response => {
      return response.data;
    });
  },
  getUserProfileStatus: (userId: number | null) => {
    return instance.get<string>(`/profile/status/${userId}`).then(res => res.data);
  },
  setUserProfileStatus: (userStatus: string) => {
    return instancePost
      .put<string>(`profile/status/`, { status: userStatus })
      .then(res => res.data);
  },
};
