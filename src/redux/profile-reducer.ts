import {TypeProfilePage} from "./store";

export type initialProfileStateType={profilePage: TypeProfilePage;}

let initialState:initialProfileStateType={  profilePage: {
        textarea: '',
        post: [
            {message: 'Hi,how are you?', like: 12},
            {message: 'It is my first post', like: 11}]
    }}


export type profileReducerType=ChangeTextAction|AddPostAction

export const profileReducer = (state:initialProfileStateType=initialState, action: profileReducerType):initialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.profilePage.textarea,
                like: 0

            }
            state.profilePage.post.push(newPost)
            state.profilePage.textarea = ''
            return state
        }
        case 'CHANGE-TEXT': {
            state.profilePage.textarea = action.value
            return state
        }
        default:
            return state
    }
}
export type AddPostAction=ReturnType<typeof AddPostAC>
export const AddPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export type ChangeTextAction=ReturnType<typeof ChangeTextAC>
export const ChangeTextAC = (value: string) => {
    return {
        type: 'CHANGE-TEXT',
        value: value
    } as const
}