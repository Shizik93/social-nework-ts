import m from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {TypeDialogs} from "../../../redux/store";



function DialogItem(props:TypeDialogs) {
    return (
        <div className={m.dialog + '' + m.actives}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem