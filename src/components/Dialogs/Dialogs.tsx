import React, {ChangeEvent} from "react";

import m from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { TypeDialogsPage } from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";



type DialogsPropsType = {
    ChangeNewMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
    AddNewMessage: () => void
    state: TypeDialogsPage
    isAuth:boolean
}

function Dialogs(props: DialogsPropsType) {
    if(!props.isAuth){return <Redirect to={'/login'}/>}

    const ChangeNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.ChangeNewMessage(e)

    }
    const AddNewMessage = () => {
        props.AddNewMessage()



    }

    const dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>,)
    const messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={m.messages}>

                {messagesElements}

            </div>
            <div>
                <textarea onChange={ChangeNewMessage} value={props.state.newMessage}></textarea>
                <button onClick={AddNewMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs

