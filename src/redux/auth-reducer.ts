import {authAPI} from "../api/api";

type initialStateType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean
}
type authReducerType=setUserDataType
const initialState:initialStateType={
    userId:null,
    email:null,
    login:null,
    isAuth:false,
}

export const authReducer=(state:initialStateType=initialState,action:authReducerType):initialStateType=>{
    switch (action.type) {
        case 'SET-USER-DATA':{
            return {...state,...action.data,isAuth:true}
        }
        default :return state

    }

}
export type setUserDataType=ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId:number,login: string,email:string) => {
    return {
        type: 'SET-USER-DATA',
        data:{userId,login,email}
    } as const

}

export const setLogin = () =>(dispatch:any)=>{
    authAPI.login()
        .then(data => {
            if (data.resultCode === 0) {
                let{id,login,email}=data.data
                dispatch(setAuthUserData(id,login,email))
            }
        })
}