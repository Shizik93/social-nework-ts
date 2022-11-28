import React from "react";
import {NavLink} from "react-router-dom";
import m from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {logoutTC} from "../../redux/auth-reducer";




export const Header = () =>{
    const dispatch=useAppDispatch()
    const login=useAppSelector(state=>state.auth.login)
    const isAuth=useAppSelector(state=>state.auth.isAuth)
    const logout=()=>{
        dispatch(logoutTC())
    }
    return(<header className={m.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'/>
        <div className={m.loginBlock}>
            {isAuth
                ? <div>{login}<button onClick={logout}>Logout</button></div>
                : <NavLink to={'/login'}>login</NavLink>}
        </div>
    </header>

)};
