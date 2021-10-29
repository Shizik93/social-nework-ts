import React from "react";

import m from "./users.module.css";
import img from "./userImg.png";
import { NavLink } from "react-router-dom";


type usersPropsType = {
    users: Array<UserType>,
    Follow: (id: number) => void,
    UnFollow: (id: number) => void,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    pages: number[]
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

export function Users(props: usersPropsType) {


    return (
        <>
            <div>
                {props.pages.map(f =>
                    <span className={`${props.currentPage === f && m.selectedPage}`}
                          onClick={() => {
                              props.onPageChanged(f)
                          }}>{f} </span>)}
            </div>
            {props.users.map(f =>
                <div key={f.id}>
                    <div>
                    <NavLink to={'/profile/'+f.id}> <img className={m.photo} src={f.photos.small !== null ? f.photos.small : img}/></NavLink>
                    </div>
                    <div>{f.name}</div>
                    <div>{f.status}</div>
                    {f.followed ?
                        <button onClick={() => props.UnFollow(f.id)}>Unfollow</button> :
                        <button onClick={() => props.Follow(f.id)}>Follow</button>}


                </div>)
            }

        </>

    )
}