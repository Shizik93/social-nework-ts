
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
export type initialDialogsStateType={dialogsPage: TypeDialogsPage}

const initialState:initialDialogsStateType={dialogsPage: {
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

    }}

export type dialogsReducerType=ChangeNewMessageAction|SendMessageActionType
export const dialogsReducer = (state:initialDialogsStateType=initialState, action: dialogsReducerType):initialDialogsStateType => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE': {
            let newState={...state}
            newState.dialogsPage={...state.dialogsPage}
            newState.dialogsPage.newMessage=action.newMessage
            return newState
        }
        case 'SEND-MESSAGE': {
            let newState={...state}
            newState.dialogsPage={...state.dialogsPage}
            newState.dialogsPage.messages=[...state.dialogsPage.messages]
            newState.dialogsPage.messages.push({message: state.dialogsPage.newMessage})
            newState.dialogsPage.newMessage = ''
            return newState

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
