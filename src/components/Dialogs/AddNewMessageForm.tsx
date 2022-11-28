import React from 'react';

import { Field, reduxForm } from 'redux-form';

import { Textarea } from '../common/UI_Toolkit/FormsControls';
import { maxLengthCreator, required } from '../common/validators/validator';

type formDataType = {
  newPost: any;
};
const maxLength10 = maxLengthCreator(10);
const AddNewMessageForm = (props: any) => {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <form onSubmit={props.handleSubmit}>
      <Field validate={[required, maxLength10]} name="newMessage" component={Textarea} />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default reduxForm<formDataType>({ form: 'addNewMessage' })(AddNewMessageForm);
