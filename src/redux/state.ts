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
    post: Array<TypePost>
}
export type TypeRootState = {
    profilePage: TypeProfilePage;
    dialogsPage: TypeDialogsPage
    textarea: string
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
export const ChangeNewMessageAC = (value: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        newMessage: value
    } as const

}
export const AddNewMessageAC = () => {
    return{
        type:'ADD-NEW-MESSAGE',
    }

}

let store: any = {
    _state: {
        profilePage: {
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
        textarea: ''
    },
    _callSubscriber(_state?: TypeRootState) {
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: any,) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.textarea,
                like: 0
            }
            this._state.profilePage.post.push(newPost)
            this._state.textarea = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === 'CHANGE-TEXT') {
            this._state.textarea = action.value
            this._callSubscriber(this._state)

        }
        else if (action.type === 'CHANGE-NEW-MESSAGE') {

            this._state.dialogsPage.newMessage = action.newMessage
            this._callSubscriber(this._state)

        }
        else if(action.type==='ADD-NEW-MESSAGE'){
            this._state.dialogsPage.messages.push({message: this._state.dialogsPage.newMessage})
            this._state.dialogsPage.newMessage=''
            this._callSubscriber(this._state)

        }
        else {
            return this._state
        }
    }
}

export default store