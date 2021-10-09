


export const state:TypeRootState = {
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
    }
}

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
}



export default state