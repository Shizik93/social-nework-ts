import React from "react";
import { NavLink } from "react-router-dom";
import m from './Header.module.css';
type AuthType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean
}
type HeaderPropsType={
    setAuthUserData:(userId:number,email:string,login: string)=>void,
    auth:AuthType}
export function Header(props:HeaderPropsType)  {
  return (<header className={m.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'/>
          <div className={m.loginBlock}>
              {props.auth.isAuth?props.auth.login:<NavLink to={'/'}>{props.auth.login}</NavLink>}
          </div>
    </header>

  )
}
