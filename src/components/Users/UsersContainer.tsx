import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    Subscribe,
    SetCurrentPage,
    SetTotalUsersCount,
    SetUsers,
    UnSubscribe,
    SetIsSubscribe,
} from "../../redux/users-reducer";

import React from "react";
import {usersAPI} from "../../api/api";




type usersPropsType = {
    users: Array<UserType>,
    Subscribe: (id: number) => void,
    UnSubscribe: (id: number) => void,
    SetUsers: (users: any) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    SetCurrentPage: (currentPage: number) => void
    SetTotalUsersCount: (totalUsersCount: number) => void
    SetIsSubscribe:(boolean: boolean,id:number)=>void
    subscribeUsers:Array<number>
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
                   Subscribe={this.props.Subscribe}
                   UnSubscribe={this.props.UnSubscribe}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   pages={pages}
                   SetIsSubscribe={this.props.SetIsSubscribe}
                   subscribeUsers={this.props.subscribeUsers}/>

        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        //@ts-ignore
        subscribeUsers:state.usersReducer.subscribeUsers,
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
    }
}



export const UsersContainer = connect(mapStateToProps,
    {
        SetIsSubscribe,
        Subscribe,
        UnSubscribe,
        SetUsers,
        SetCurrentPage,
        SetTotalUsersCount})(UsersClass)