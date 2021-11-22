import React, {ChangeEvent} from "react";

import m from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { TypeDialogsPage } from "../../redux/dialogs-reducer";
import AddNewPostForm from "./AddNewMessageForm";





type DialogsPropsType = {
    AddNewMessage: (value:any) => void
    state: TypeDialogsPage
    isAuth:boolean
}

function Dialogs(props: DialogsPropsType) {

    const AddNewMessage = (value:any) => {
        props.AddNewMessage(value.newMessage)



    }

    const dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>,)
    const messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={m.messages}>

                {messagesElements}

            </div>
            <AddNewPostForm onSubmit={AddNewMessage}/>
        </div>
    )
}

export default Dialogs

