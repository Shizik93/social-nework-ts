export type TypePost = {
    message: string;
    like: number
}
export type TypeProfilePage = {
    textarea: string
    post: Array<TypePost>
}

export type initialProfileStateType = {
    profilePage: TypeProfilePage
}

let initialState: initialProfileStateType = {
    profilePage: {
        textarea: '',
        post: [
            {message: 'Hi,how are you?', like: 12},
            {message: 'It is my first post', like: 11}]
    }
}


export type profileReducerType = ChangeTextAction | AddPostAction

export const profileReducer = (state: initialProfileStateType = initialState, action: profileReducerType): initialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newState={...state}

            let newPost = {
                id: 5,
                message: newState.profilePage.textarea,
                like: 0
            }
            newState.profilePage={...state.profilePage}
            newState.profilePage.post=[...state.profilePage.post]
            newState.profilePage.post.push(newPost)
            newState.profilePage.textarea = ''
            return newState
        }
        case 'CHANGE-TEXT': {
            let newState={...state}
            newState.profilePage={...state.profilePage}
            newState.profilePage.textarea = action.value
            return newState
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