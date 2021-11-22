import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/UI_Toolkit/FormsControls";
import {maxLengthCreator, required} from "../common/validators/validator";
type FormDataType={
    login:string,
    password:string,
    rememberMe:boolean
}
const maxLength15=maxLengthCreator(15)
export const LoginForm = (props:InjectedFormProps<FormDataType>) => {


    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field validate={[required,maxLength15]} name={'login'} placeholder={'Login'} component={Input}/>
            </div>
            <div>
                <Field validate={[required,maxLength15]} name={'password'} placeholder={'Password'} component={Input}/>
            </div>
            <div style={{fontSize: '15px'}}>
                <Field name={'rememberMe'} component={Input} type={'checkbox'}/>Remember
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
