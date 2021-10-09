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
    messages: Array<TypeMessage>
    dialogs: Array<TypeDialogs>
}
export type TypeProfilePage = {
    post: Array<TypePost>
}
export type TypeRootState = {
    profilePage: TypeProfilePage;
    dialogsPage: TypeDialogsPage
    textarea: string
}

let store: any = {
    _state: {
        profilePage: {
            post: [
                {message: 'Hi,how are you?', like: 12},
                {message: 'It is my first post', like: 11}]
        },
        dialogsPage: {
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
        textarea: ''
    },
    getState(){
        return this._state
    },
    callSubscriber(_state?: TypeRootState) {
    },
    onChangeTextArea(value: string) {

        this._state.textarea = value
        this.callSubscriber(this._state)
    },
    addPost() {

        let newPost = {
            id: 5,
            message: this._state.textarea,
            like: 0
        }

        this._state.profilePage.post.push(newPost)
        this._state.textarea = ''
        this.callSubscriber(this._state)


    },
    subscribe(observer: any) {
        this.callSubscriber = observer
    }
}

export default store