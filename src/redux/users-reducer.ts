import {v1} from "uuid"

export type initialUsersStateType = {
    users: Array<usersType>
}
export type usersType = {
    id: string,
    photoUrl: string,
    fullName: string,
    status: string,
    following: boolean,
    location: locationType
}
type locationType = {
    country: string,
    city: string
}
let initialState: initialUsersStateType = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg',
            fullName: 'Dmitry',
            following: true,
            status: 'Hello World from Belarus!',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: v1(),
            photoUrl: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg',
            fullName: 'Andrey',
            following: true,
            status: 'Hello World from Ukraine!',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: v1(),
            photoUrl: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg',
            fullName: 'Viktor',
            following: false,
            status: 'Hello Worls from Russia',
            location: {country: 'Russia', city: 'Moscow'}
        },
    ]

}


export type usersReducerType = FollowType | UnFollow | SetUsersType

export const usersReducer = (state: initialUsersStateType = initialState, action: usersReducerType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, following: true} : u)}
        }
        case 'UNFOLLOW-USER': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, following: false} : u)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }


        default:
            return state

    }


}
export type FollowType = ReturnType<typeof Follow>
export const Follow = (id: string) => {
    return {
        type: 'FOLLOW-USER',
        id,

    } as const
}
export type UnFollow = ReturnType<typeof UnFollow>
export const UnFollow = (id: string) => {
    return {
        type: 'UNFOLLOW-USER',
        id,

    } as const
}
export type SetUsersType = ReturnType<typeof SetUsers>
export const SetUsers = (users: any) => {
    return {
        type: 'SET-USERS',
        users,
    } as const

}