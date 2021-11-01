import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Follow, SetCurrentPage, SetTotalUsersCount, SetUsers, UnFollow,} from "../../redux/users-reducer";

import React from "react";
import {usersAPI} from "../../api/api";




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
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data=>{
            this.props.SetUsers(data.items)
            this.props.SetTotalUsersCount(data.totalCount)
        })




    }


    onPageChanged = (pageNumber: number) => {
        this.props.SetCurrentPage(pageNumber)
        {
            usersAPI.onPageChanged(pageNumber,this.props.pageSize).then(data => {
                this.props.SetUsers(data.items)

            })
        }
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <Users users={this.props.users}
                   Follow={this.props.Follow}
                   UnFollow={this.props.UnFollow}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   pages={pages}/>

        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
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
        SetTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(SetTotalUsersCount(totalUsersCount))
        }
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)