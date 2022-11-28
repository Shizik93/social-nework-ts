import m from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddNewPostForm from "./AddNewMessageForm";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {SendMessageAC} from "../../redux/dialogs-reducer";





const Dialogs = () => {
    const dispatch=useAppDispatch()
    const dialogs=useAppSelector(state=>state.dialogsReducer.dialogs)
    const messages=useAppSelector(state=>state.dialogsReducer.messages)

    const AddNewMessage = (value: any ) => {
        debugger
        dispatch(SendMessageAC(value))




    }

    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>,)
    const messagesElements = messages.map(m => <Message message={m.message}/>)
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
};

export default Dialogs

