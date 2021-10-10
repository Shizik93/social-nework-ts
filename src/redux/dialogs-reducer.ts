export const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE': {
            state.newMessage = action.newMessage
            return state
        }
        case 'SEND-MESSAGE': {
            state.messages.push({message: state.newMessage})
            state.newMessage = ''
            return state

        }
        default:return state
    }
}
export const ChangeNewMessageAC = (value: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        newMessage: value
    } as const

}
export const SendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    }

}