import React from "react";
import axios from "axios";
import img from './userImg.png'
import m from './users.module.css'
import {SetCurrentPage} from "../../redux/users-reducer";

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
        axios.get<DataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.SetUsers(responce.data.items)
            this.props.SetTotalUsersCount(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.SetCurrentPage(pageNumber)
        {
            axios.get<DataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
                this.props.SetUsers(responce.data.items)

            })
        }
    }
    getUsers = () => {

        axios.get<DataType>('https://social-network.samuraijs.com/api/1.0/users?page=1542').then(responce => {
            this.props.SetUsers(responce.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <>
                <div>
                    {pages.map(f => <span className={`${this.props.currentPage === f && m.selectedPage}`}
                                          onClick={() => {
                                              this.onPageChanged(f)
                                          }}>{f} </span>)}


                </div>
                {this.props.users.map(f => <div key={f.id}>
                    <div><img className={m.photo} src={f.photos.small !== null ? f.photos.small : img}/></div>
                    <div>{f.name}</div>
                    <div>{f.status}</div>
                    {f.followed ? <button onClick={() => this.props.UnFollow(f.id)}>Unfollow</button> :
                        <button onClick={() => this.props.Follow(f.id)}>Follow</button>}


                </div>)
                }
                <button onClick={this.getUsers}>Set Users</button>

            </>

        )
    }
}

