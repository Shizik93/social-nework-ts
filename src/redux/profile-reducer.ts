export const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.textarea,
                like: 0

            }
            state.post.push(newPost)
            state.textarea = ''
            return state
        }
        case 'CHANGE-TEXT': {
            state.textarea = action.value
            return state
        }
        default:
            return state
    }
}
export const AddPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const ChangeTextAC = (value: string) => {
    return {
        type: 'CHANGE-TEXT',
        value: value
    } as const
}