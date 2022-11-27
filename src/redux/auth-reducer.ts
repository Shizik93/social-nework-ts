import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
export type authReducerType = setUserDataType
const initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: initialStateType = initialState, action: authReducerType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data}
        }
        default :
            return state

    }

}
export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, login: login, email, isAuth}
    } as const

}

export const setLogin = () => (dispatch: any) => {
    return  authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email, true))

            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

   authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setLogin())
            }
            else{
                dispatch(stopSubmit('login',{_error:data.messages[0]}))
            }
        })
}
export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }
        )

}
