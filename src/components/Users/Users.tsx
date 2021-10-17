import React from "react";
import {usersType} from "../../redux/users-reducer";
import styles from './users.module.css'
import {v1} from "uuid";

type usersPropsType = {
    users: Array<usersType>,
    Follow: (id: string) => void,
    UnFollow: (id: string) => void,
    SetUsers: (users: any) => void,
}


export function Users(props: usersPropsType) {
    if (props.users.length===0){
        props.SetUsers([
            {
                id: v1(),
                photoUrl: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg',
                fullName: 'Dmitry',
                following: true,
                status: 'Hello World from Belarus!',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: v1(),
                photoUrl: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg',
                fullName: 'Andrey',
                following: true,
                status: 'Hello World from Ukraine!',
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: v1(),
                photoUrl: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg',
                fullName: 'Viktor',
                following: false,
                status: 'Hello Worls from Russia',
                location: {country: 'Russia', city: 'Moscow'}
            },
        ])
    }

    return (
        <>
            {props.users.map(f => <div key={f.id}>
                    <img className={styles.photo} src={f.photoUrl}/>
                    <div>{f.fullName}</div>
                    <div>{f.status}</div>
                    <div>{f.location.city}</div>
                    <div>{f.location.country}</div>
                    {f.following ? <button onClick={() => props.UnFollow(f.id)}>Unfollow</button> :
                        <button onClick={() => props.Follow(f.id)}>Follow</button>}

                </div>)
            }


        </>

    )
}