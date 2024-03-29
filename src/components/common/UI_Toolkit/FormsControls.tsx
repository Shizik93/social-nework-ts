import React from 'react';

import style from './formsControls.module.css';

const FormControl = (props: any) => {
  console.log(props);
  // eslint-disable-next-line react/destructuring-assignment
  const error = props.meta.touched && props.meta.error;

  return (
    <div className={error ? style.error : style.form}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <div>{props.children}</div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {error && <span className={style.error}>{props.meta.error}</span>}
    </div>
  );
};

export const Textarea = (props: any) => {
  const { input } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...props} />
    </FormControl>
  );
};
export const Input = (props: any) => {
  const { input } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...props} />
    </FormControl>
  );
};
