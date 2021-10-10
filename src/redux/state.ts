import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

export type TypeDialogs = {
    id: number;
    name: string
}
export type TypeMessage = {
    message: string
}
export type TypePost = {
    message: string;
    like: number
}
export type TypeDialogsPage = {
    newMessage: string
    messages: Array<TypeMessage>
    dialogs: Array<TypeDialogs>
}
export type TypeProfilePage = {
    textarea: string
    post: Array<TypePost>
}
export type TypeRootState = {
    profilePage: TypeProfilePage;
    dialogsPage: TypeDialogsPage

}

let store: any = {
    _state: {
        profilePage: {
            textarea: '',
            post: [
                {message: 'Hi,how are you?', like: 12},
                {message: 'It is my first post', like: 11}]
        },
        dialogsPage: {
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

        },

    },
    _callSubscriber(_state?: TypeRootState) {
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        this._state.profilePage=profileReducer(this._state.profilePage,action)
          this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
this._callSubscriber(this._state)
    }
}

export default store