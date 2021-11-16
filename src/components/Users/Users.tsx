import React from "react";
import m from "./users.module.css";
import img from "./userImg.png";
import { NavLink } from "react-router-dom";
type usersPropsType = {
    SetUnsubscribe:(id:number)=>void,
    users: Array<UserType>,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    pages: number[],
    subscribeUsers:Array<number>,
    SetSubscribe:(id:number)=>void
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
                    <span key={f} className={`${props.currentPage === f && m.selectedPage}`}
                          onClick={() => {
                              props.onPageChanged(f)
                          }}>{f} </span>)}
            </div>
            {props.users.map(f =>
                <div key={f.id}>
                    <div>
                    <NavLink to={'/profile/'+f.id}>
                        <img className={m.photo} src={f.photos.small !== null ? f.photos.small : img}/>
                    </NavLink>
                    </div>
                    <div>{f.name}</div>
                    <div>{f.status}</div>
                    {f.followed ?
                        <button
                            disabled={props.subscribeUsers.some(id=>id===f.id)}
                            onClick={() => {props.SetSubscribe(f.id)}}>Unsubscribe</button> :
                        <button
                            disabled={props.subscribeUsers.some(id=>id===f.id)} onClick={() => {
                            props.SetUnsubscribe(f.id)}}>Subscribe</button>}


                </div>)
            }

        </>

    )
}