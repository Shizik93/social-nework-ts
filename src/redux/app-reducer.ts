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
  } as const;
};

export const initializingAppTC = (): AppThunk => async dispatch => {
  try {
    await dispatch(authMeTC());
    dispatch(SetInitialized());
  } catch (err) {
    console.log(err);
  }
};

type initialStateType = {
  initialized: boolean;
};
export type AppReducerType = ReturnType<typeof SetInitialized>;
