import {v1} from "uuid";
import {profileAPI} from "../api/api";
type ProfileUsersType={

    aboutMe:string,
    contacts: {
        facebook: string|null,
        website: string|null,
        vk: string|null,
        twitter: string|null,
        instagram: string|null,
        youtube: string|null,
        github: string|null,
        mainLink: string|null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string|null,
    fullName: string,
    userId: number,
    photos: {
        small: string|null,
        large: string|null
    }
}
export type TypePost = {
    id:string
    message: string;
    like: number
}
export type TypeProfilePage = {
    profile:ProfileUsersType|null
    textarea: string
    post: Array<TypePost>
}

export type initialProfileStateType = TypeProfilePage


let initialState: initialProfileStateType = {
    profile:null,
    textarea: '',
    post: [
        {id:v1(),message: 'Hi,how are you?', like: 12},
        {id:v1(),message: 'It is my first post', like: 11}]
}


export type profileReducerType = ChangeTextAction | AddPostAction|setUserProfileType

export const profileReducer = (state: initialProfileStateType = initialState, action: profileReducerType): initialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state,textarea:'',post:[...state.post,{id:v1(),message:state.textarea,like: 0}]}
        }
        case 'CHANGE-TEXT': {
            return {...state,textarea:action.value}
        }
          case 'SET-PROFILE-USER': {
            return {...state,profile:action.profile}
        }

        default:
            return state
    }
}
export type AddPostAction = ReturnType<typeof AddPostAC>
export const AddPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export type ChangeTextAction = ReturnType<typeof ChangeTextAC>
export const ChangeTextAC = (value: string) => {
    return {
        type: 'CHANGE-TEXT',
        value: value
    } as const
}
export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile:ProfileUsersType) => {
    return {
        type: 'SET-PROFILE-USER',
        profile
    } as const
}
export const getUserProfile = (userId: string) => (dispatch:any)=>{
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })

}