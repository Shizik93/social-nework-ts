import React from "react";

import m from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {TypeDialogsPage} from "../../redux/state";


function Dialogs(props: TypeDialogsPage) {



    const dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>,)
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={m.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs

