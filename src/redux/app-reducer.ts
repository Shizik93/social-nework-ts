import {setLogin} from "./auth-reducer";
import {AppThunk} from "./store";

const INITIALIZED = 'auth/SET-INITIALIZED'


const initialState = {
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: AppReducerType): initialStateType => {
    switch (action.type) {

        case INITIALIZED : {

            return {...state, initialized: true}
        }
        default:
            return state
    }

}

const SetInitialized = () => {

    return {
        type: INITIALIZED,
    }
}
export const initializingAppTC = (): AppThunk => async (dispatch) => {
    await dispatch(setLogin())
    dispatch(SetInitialized())

}


type initialStateType = {
    initialized: boolean
}
export  type AppReducerType = ReturnType<typeof SetInitialized>