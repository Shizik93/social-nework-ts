export type TypePost = {
    id:number
    message: string;
    like: number
}
export type TypeProfilePage = {
    textarea: string
    post: Array<TypePost>
}

export type initialProfileStateType = TypeProfilePage


let initialState: initialProfileStateType = {
    textarea: '',
    post: [
        {id:1,message: 'Hi,how are you?', like: 12},
        {id:2,message: 'It is my first post', like: 11}]
}


export type profileReducerType = ChangeTextAction | AddPostAction

export const profileReducer = (state: initialProfileStateType = initialState, action: profileReducerType): initialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state,textarea:'',post:[...state.post,{id:11,message:state.textarea,like: 0}]}
        }
        case 'CHANGE-TEXT': {
            return {...state,textarea:action.value}
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