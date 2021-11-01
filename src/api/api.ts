import axios from "axios";
type followType={

    resultCode: number
    messages:[],
    data: object
}
type DataType = {
    error: null | string
    totalCount: number
    items: Array<UserType>
}
type AuthResponceType = {
    data: {
        id: number,
        login: string,
        email: string
    },
    messages: Array<string>,
    fieldsErrors: [],
    resultCode: number
}
type ProfileUsersType = {

    aboutMe: string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}
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

export const usersAPI={
    getUsers(currentPage: number, pageSize: number){
        return axios.get<DataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            })
    },
    onPageChanged(pageNumber: number, pageSize: number){

        {
            return axios.get<DataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
                .then(responce => {
                    return responce.data


                })
        }

    },
    deleteFollow (id:number){
        return  axios.delete<followType>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {withCredentials: true,
                headers:{
                    'API-KEY':'a9f5b347-68da-4301-888d-541b1ac92546'
                }}).then(responce=>{
            return responce.data.resultCode
        })

    },
    postFollow(id:number){
        return axios.post<followType>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {},
            {withCredentials: true,
                headers:{
                    'API-KEY':'a9f5b347-68da-4301-888d-541b1ac92546'
                }})  .then(responce=>{
            return responce.data.resultCode
        })

    }
}

export const authAPI={
    login(){
        return axios.get<AuthResponceType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(responce => {
            return responce.data
        })
},
}

export const profileAPI={
    getUserProfile(userId: string){
        return axios.get<ProfileUsersType>('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(responce => {
                return responce.data
            }
        )

    },
}

