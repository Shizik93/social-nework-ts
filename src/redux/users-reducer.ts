export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}
export type initialUsersStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isLoading:boolean
}

let initialState: initialUsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 1,
    isLoading:false

}

export type usersReducerType = FollowType | UnFollow | SetUsersType | SetCurrentPageType | SetTotalUsersCountType|SetIsLoadingType

export const usersReducer = (state: initialUsersStateType = initialState, action: usersReducerType): initialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW-USER': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case "SET-USERS": {

            return {...state, users: [...action.users]}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
    case "TOGGLE-IS-LOADING": {
            return {...state, isLoading: action.boolean}
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
export type SetCurrentPageType = ReturnType<typeof SetCurrentPage>
export const SetCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const

}
export type SetTotalUsersCountType = ReturnType<typeof SetTotalUsersCount>
export const SetTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const

}
export type SetIsLoadingType = ReturnType<typeof SetIsLoading>
export const SetIsLoading = (boolean: boolean) => {
    return {
        type: "TOGGLE-IS-LOADING",
        boolean
    } as const

}