import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
type FormDataType={
    login:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm = (props:InjectedFormProps<FormDataType>) => {


    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field name={'login'} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component={'input'}/>
            </div>
            <div style={{fontSize: '15px'}}>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>Remember
                Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login',

})(LoginForm)

export const Login = () => {
    const onSubmit = (formData:FormDataType) => {

    }
    return (
        <h1><LoginReduxForm onSubmit={onSubmit}/></h1>
    )

}
export default Login