import { SendMessageAC } from '../../redux/dialogs-reducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

import AddNewPostForm from './AddNewMessageForm';
import DialogItem from './DialogItem/DialogItem';
import m from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {
  const dispatch = useAppDispatch();
  const dialogs = useAppSelector(state => state.dialogsReducer.dialogs);
  const messages = useAppSelector(state => state.dialogsReducer.messages);

  const AddNewMessage = (value: any) => {
    dispatch(SendMessageAC(value));
  };

  const dialogsElements = dialogs.map(d => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));
  const messagesElements = messages.map(m => (
    <Message key={m.message} message={m.message} />
  ));

  return (
    <div className={m.dialogs}>
      <div className={m.dialogsItems}>{dialogsElements}</div>

      <div className={m.messages}>{messagesElements}</div>
      <AddNewPostForm onSubmit={AddNewMessage} />
    </div>
  );
};

export default Dialogs;
