import React from "react";

import m from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ChangeNewMessageAC,
    SendMessageAC,
    TypeDialogs,
    TypeMessage
} from "../../redux/state";
 type DialogsPropsType={
     newMessage:string
     dialogs:Array<TypeDialogs>
     messages:Array<TypeMessage>
     dispatch:(action:any)=>void
 }

function Dialogs(props: DialogsPropsType) {
const ChangeNewMessage = (e:any) => {
    props.dispatch(ChangeNewMessageAC(e.currentTarget.value))

}
const AddNewMessage= () => {
    props.dispatch(SendMessageAC())


}

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
            <div>
                <textarea onChange={ChangeNewMessage} value={props.newMessage} ></textarea>
                <button onClick={AddNewMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs

