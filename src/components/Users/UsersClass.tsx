import React from "react";
import axios from "axios";

type usersPropsType = {
    users: Array<UserType>,
    Follow: (id: number) => void,
    UnFollow: (id: number) => void,
    SetUsers: (users: any) => void,
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

export class UsersClass extends React.Component <usersPropsType>{
    componentDidMount() {axios.get<DataType>('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
        this.props.SetUsers(responce.data.items)
    })
    }

    getUsers = () => {

            axios.get<DataType>('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
                this.props.SetUsers(responce.data.items)
            })


    }

    render() {
        return (
            <>
            {this.props.users.map(f => <div key={f.id}>

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

