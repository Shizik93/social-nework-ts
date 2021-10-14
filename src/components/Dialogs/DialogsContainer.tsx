import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {ChangeNewMessageAC, SendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {RootType} from "../../redux/redux-store";
 type DialogsPropsType={
    store:RootType
 }

export function DialogsContainer(props: DialogsPropsType) {
const ChangeNewMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.store.dispatch(ChangeNewMessageAC(e.currentTarget.value))
    /*props.dispatch(ChangeNewMessageAC(e.currentTarget.value))*/

}
const AddNewMessage= () => {
    props.store.dispatch(SendMessageAC())
    /*props.dispatch(SendMessageAC())*/


}
const state=props.store.getState().dialogsReducer.dialogsPage

    return (
    <Dialogs ChangeNewMessage={ChangeNewMessage} AddNewMessage={AddNewMessage} state={state}/>
    )
}



