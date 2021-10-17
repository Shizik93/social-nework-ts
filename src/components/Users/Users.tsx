import React from "react";
import {usersType} from "../../redux/users-reducer";
import styles from './users.module.css'

type usersPropsType = {
    users: Array<usersType>,
    Follow: (id: string) => void,
    UnFollow: (id: string) => void,
    SetUsers: (users: any) => void,
}


export function Users(props: usersPropsType) {

    return (
        <div>
            {
                props.users.map(f => <div key={f.id}>
                    <img className={styles.photo} src={f.photoUrl}/>
                    <div>{f.fullName}</div>
                    <div>{f.status}</div>
                    <div>{f.location.city}</div>
                    <div>{f.location.country}</div>
                    {f.following ? <button onClick={() => props.UnFollow(f.id)}>Unfollow</button> :
                        <button onClick={() => props.Follow(f.id)}>Follow</button>}

                </div>)
            }


        </div>

    )
}