import React from 'react';

import { connect, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { loginTC } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/store';
import { Input } from '../common/UI_Toolkit/FormsControls';
import { required } from '../common/validators/validator';

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};
export const LoginForm = ({ handleSubmit, error }: InjectedFormProps<FormDataType>) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field validate={[required]} name="login" placeholder="Login" component={Input} />
      </div>
      <div>
        <Field
          validate={[required]}
          name="password"
          type="password"
          placeholder="Password"
          component={Input}
        />
      </div>
      <div style={{ fontSize: '15px' }}>
        <Field name="rememberMe" component={Input} type="checkbox" />
        Remember Me
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm);
const Login = ({ login }: LoginPropsType) => {
  const isAuth = useSelector<AppStateType>(state => state.auth.isAuth);
  const onSubmit = (formData: FormDataType) => {
    login(formData.login, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login: loginTC })(Login);
