import {UserType} from "../components/Users/Users";

export type initialUsersStateType = {
    users: Array<UserType>
}

let initialState: initialUsersStateType = {
    users: []

}

export type usersReducerType = FollowType | UnFollow | SetUsersType

export const usersReducer = (state: initialUsersStateType = initialState, action: usersReducerType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW-USER': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }


        default:
            return state

    }


}
export type FollowType = ReturnType<typeof Follow>
export const Follow = (id: number) => {
    return {
        type: 'FOLLOW-USER',
        id,

    } as const
}
export type UnFollow = ReturnType<typeof UnFollow>
export const UnFollow = (id: number) => {
    return {
        type: 'UNFOLLOW-USER',
        id,

    } as const
}
export type SetUsersType = ReturnType<typeof SetUsers>
export const SetUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const

}