import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Follow, SetCurrentPage, SetIsLoading, SetTotalUsersCount, SetUsers, UnFollow,} from "../../redux/users-reducer";
import preloader from "../../assets/images/__Iphone-spinner-1.gif";

import React from "react";
import axios from "axios";

type usersPropsType = {
    users: Array<UserType>,
    Follow: (id: number) => void,
    UnFollow: (id: number) => void,
    SetUsers: (users: any) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    SetCurrentPage: (currentPage: number) => void
    SetTotalUsersCount: (totalUsersCount: number) => void
    isLoading: boolean
    ToggleIsLoading:(boolean:boolean)=>void
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

type DataType = {
    error: null | string
    totalCount: number
    items: Array<UserType>
}

export class UsersClass extends React.Component <usersPropsType> {
    componentDidMount() {
        this.props.ToggleIsLoading(true)
        axios.get<DataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.SetUsers(responce.data.items)
            this.props.SetTotalUsersCount(responce.data.totalCount)
            this.props.ToggleIsLoading(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.ToggleIsLoading(true)
        this.props.SetCurrentPage(pageNumber)
        {
            axios.get<DataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
                this.props.SetUsers(responce.data.items)
                this.props.ToggleIsLoading(false)

            })
        }
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (<>
                <div>
                    {this.props.isLoading?<img src={preloader}/>:null}
                </div>
                <Users users={this.props.users}
                       Follow={this.props.Follow}
                       UnFollow={this.props.UnFollow}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       pages={pages}/>
            </>


        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isLoading: state.usersReducer.isLoading
    }
}
const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        Follow: (id: number) => {
            dispatch(Follow(id))
        },
        UnFollow: (id: number) => {
            dispatch(UnFollow(id))
        },
        SetUsers: (users: Array<UserType>) => {
            dispatch(SetUsers(users))
        },
        SetCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPage(currentPage))
        },
        SetTotalUsersCount: (totalUsersCount: number) => {
            dispatch(SetTotalUsersCount(totalUsersCount))
        } ,
        ToggleIsLoading: (boolean: boolean) => {
            dispatch(SetIsLoading(boolean))
        }
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)