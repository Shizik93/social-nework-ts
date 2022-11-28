import React from 'react';

import { NavLink } from 'react-router-dom';

import { TypeDialogs } from '../../../redux/dialogs-reducer';
import m from '../Dialogs.module.css';

const DialogItem = ({ id, name }: TypeDialogs) => {
  return (
    <div className={`${m.dialog}${m.actives}`}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
