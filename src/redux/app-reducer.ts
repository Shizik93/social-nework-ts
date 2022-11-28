import { authMeTC } from './auth-reducer';
import { AppThunk } from './store';

const INITIALIZED = 'auth/SET-INITIALIZED';

const initialState = {
  initialized: false,
};

export const appReducer = (
  // eslint-disable-next-line default-param-last
  state: initialStateType = initialState,
  action: AppReducerType,
): initialStateType => {
  switch (action.type) {
    case INITIALIZED: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

const SetInitialized = () => {
  return {
    type: INITIALIZED,
  };
};

export const initializingAppTC = (): AppThunk => async dispatch => {
  await dispatch(authMeTC());
  dispatch(SetInitialized());
};

type initialStateType = {
  initialized: boolean;
};
export type AppReducerType = ReturnType<typeof SetInitialized>;
