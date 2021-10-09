import React from "react";
import {NavLink} from "react-router-dom";
import m from './Nav.module.css'

export function Nav () {

    return (
        <nav className={m.nav}>

            <div className={`${m.item} ${m.active}`}>
                <NavLink to='/profile' activeClassName={m.active}>Profile</NavLink>
            </div>
            <div className={`${m.item} ${m.active}`}>
                <NavLink to='/dialogs' activeClassName={m.active}>Messages</NavLink>
            </div>
            <div className={`${m.item} ${m.active}`}>
                <NavLink to='/news' activeClassName={m.active}>News</NavLink>
            </div>
            <div className={`${m.item} ${m.active}`}>
                <NavLink to='/music' activeClassName={m.active}>Music</NavLink>
            </div>
            <div className={`${m.item} ${m.active}`}>
                <NavLink to='/settings' activeClassName={m.active}>Settings</NavLink>
            </div>

        </nav>
    )
}