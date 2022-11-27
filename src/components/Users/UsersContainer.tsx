import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/store";
import {
    SetCurrentPage,
    getUsersThunkCreator,
    SetSubscribe,
    SetUnsubscribe,
} from "../../redux/users-reducer";

import React from "react";





type usersPropsType = {
    SetUnsubscribe:(id:number)=>void,
    SetSubscribe:(id:number)=>void,
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    SetCurrentPage: (currentPage: number) => void
    subscribeUsers:Array<number>
    getUsersThunkCreator:(currentPage:number,pageSize:number)=>void

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


export class UsersClass extends React.Component <usersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)


    }


    onPageChanged = (pageNumber: number) => {
        this.props.SetCurrentPage(pageNumber)
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)

    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = [];
        function createPages(pages:Array<number>, pagesCount:number, currentPage:number) {
            if(pagesCount > 10) {
                if(currentPage > 5) {
                    for (let i = currentPage-4; i <= currentPage+5; i++) {
                        pages.push(i)
                        if(i === pagesCount) break
                    }
                }
                else {
                    for (let i = 1; i <= 10; i++) {
                        pages.push(i)
                        if(i === pagesCount) break
                    }
                }
            }  else {
                for (let i = 1; i <= pagesCount; i++) {
                    pages.push(i)
                }
            }
        }
        createPages(pages,pagesCount,this.props.currentPage)
        return (
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   pages={pages}
                   subscribeUsers={this.props.subscribeUsers}
                   SetSubscribe={this.props.SetSubscribe}
                   SetUnsubscribe={this.props.SetUnsubscribe}
            />

        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        subscribeUsers:state.usersReducer.subscribeUsers,
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
    }
}



export const UsersContainer = connect(mapStateToProps,
    {
        SetUnsubscribe,
        SetSubscribe,
        getUsersThunkCreator,
        SetCurrentPage,})(UsersClass)