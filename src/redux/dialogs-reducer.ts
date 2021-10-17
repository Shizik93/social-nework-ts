import { v1 } from "uuid"

export type TypeDialogs = {
    id: string;
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
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Victor'},
            {id: v1(), name: 'Valera'},
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
