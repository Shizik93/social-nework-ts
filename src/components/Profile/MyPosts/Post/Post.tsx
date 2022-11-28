import React from 'react';

import img from '../../../../assets/images/924874.png';
import { TypePost } from '../../../../redux/profile-reducer';

import m from './Post.module.css';

export const Post = (props: TypePost) => {
  return (
    <div className={m.post}>
      <img src={img} />
      <div>{props.message}</div>
      <div>
        <span>like </span>
        {props.like}
      </div>
    </div>
  );
};
