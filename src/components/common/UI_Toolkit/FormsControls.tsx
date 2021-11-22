import React from "react";
import style from './formsControls.module.css'

const FormControl = (props:any) => {
    const error=props.meta.touched&&props.meta.error
    return (
        <div className={error?style.error:style.form}>
            <div>
                {props.children}
            </div>
            {error&&<span className={style.error}>{props.meta.error}</span>}
        </div>

    )
}
  

export const Textarea = (props: any) => {
    const input = props.input
    return (
       <FormControl {...props}><textarea{...input} {...props} /></FormControl>
    )
}
export const Input = (props: any) => {

    const input = props.input
    return (
        <FormControl {...props}><input{...input} {...props} /></FormControl>
    )
}
