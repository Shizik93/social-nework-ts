import React from 'react';

import m from '../Dialogs.module.css';

export type TypeMessage = {
  message: string;
};

const Message = ({ message }: TypeMessage) => {
  return <div className={m.message}>{message}</div>;
};

export default Message;
