import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/UI_Toolkit/FormsControls";
import {required} from "../common/validators/validator";
import {login} from "../../redux/auth-reducer";
import {connect, useSelector} from "react-redux";
import {AppStateType, RootType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type FormDataType={
    login:string,
    password:string,
    rememberMe:boolean
}

type LoginPropsType={
    login:(email: string, password: string, rememberMe: boolean)=>void
}
export const LoginForm = (props:InjectedFormProps<FormDataType>) => {


    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field validate={[required]} name={'login'} placeholder={'Login'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} name={'password'} type={'password'} placeholder={'Password'} component={Input}/>
            </div>
            <div style={{fontSize: '15px'}}>
                <Field name={'rememberMe'} component={Input} type={'checkbox'}/>Remember
                Me
            </div>
            {props.error&&<div style={{color: 'red'}}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login',})(LoginForm)
const Login = (props:LoginPropsType) => {
    const isAuth=useSelector<AppStateType>((state)=>state.auth.isAuth)
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.login,formData.password,formData.rememberMe)


    }
if(isAuth){
    return <Redirect to={'/profile'}/>
}
    return (
        <div>
        <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}
export default connect(null,{login})(Login)
