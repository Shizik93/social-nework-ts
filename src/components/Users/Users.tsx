import React from "react";
import m from "./users.module.css";
import img from "./userImg.png";
import { NavLink } from "react-router-dom";
import {usersAPI} from "../../api/api";
type usersPropsType = {
    users: Array<UserType>,
    Subscribe: (id: number) => void,
    UnSubscribe: (id: number) => void,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    pages: number[],
    SetIsSubscribe:(boolean: boolean,id:number)=>void,
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
                    <NavLink to={'/profile/'+f.id}>
                        <img className={m.photo} src={f.photos.small !== null ? f.photos.small : img}/>
                    </NavLink>
                    </div>
                    <div>{f.name}</div>
                    <div>{f.status}</div>
                    {f.followed ?
                        <button disabled={props.subscribeUsers.some(id=>id===f.id)} onClick={() => {
                            props.SetIsSubscribe(true,f.id)
                            usersAPI.deleteSubscribe(f.id).then(resultCode => {
                                if(resultCode===0){
                                    props.UnSubscribe(f.id)
                                    props.SetIsSubscribe(false,f.id)}

                            })
                            }}>Unsubscribe</button> :
                        <button disabled={props.subscribeUsers.some(id=>id===f.id)} onClick={() => {
                            props.SetIsSubscribe(true,f.id)
                            usersAPI.postSubscribe(f.id).then(resultCode => {
                            if(resultCode===0){
                                props.Subscribe(f.id)
                                props.SetIsSubscribe(false,f.id)}

                        })}}>Subscribe</button>}


                </div>)
            }

        </>

    )
}