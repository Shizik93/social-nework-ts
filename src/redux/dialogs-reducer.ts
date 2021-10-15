
export type TypeDialogs = {
    id: number;
    name: string
}
export type TypeMessage = {
    message: string
}

export type TypeDialogsPage = {
    newMessage: string
    messages: Array<TypeMessage>
    dialogs: Array<TypeDialogs>
}
export type initialDialogsStateType=TypeDialogsPage

const initialState:initialDialogsStateType={
        newMessage: '',
        messages: [
            {message: 'Hi'},
            {message: 'How is your it-kamasutra?'},
            {message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ]

    }

export type dialogsReducerType=ChangeNewMessageAction|SendMessageActionType
export const dialogsReducer = (state:initialDialogsStateType=initialState, action: dialogsReducerType):initialDialogsStateType => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE': {
            return {...state,newMessage:action.newMessage}
        }
        case 'SEND-MESSAGE': {
            return{...state,newMessage:'',messages:[...state.messages,{message: state.newMessage}]}
        }
        default:return state
    }
}
export type ChangeNewMessageAction=ReturnType<typeof ChangeNewMessageAC>
export const ChangeNewMessageAC = (value: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        newMessage: value
    } as const

}
 export type SendMessageActionType=ReturnType<typeof SendMessageAC>
export const SendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    }as const




}
