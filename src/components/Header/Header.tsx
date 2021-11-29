import React from "react";
import {NavLink} from "react-router-dom";
import m from './Header.module.css';

type AuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type HeaderPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void,
    auth: AuthType
    logout: () => void
}

export function Header(props: HeaderPropsType) {

    return (<header className={m.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'/>
            <div className={m.loginBlock}>
                {props.auth.isAuth
                    ? <div>{props.auth.login}- <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>

    )
}
