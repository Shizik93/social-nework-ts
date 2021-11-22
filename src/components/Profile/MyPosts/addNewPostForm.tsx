import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/UI_Toolkit/FormsControls";
import {maxLengthCreator, required} from "../../common/validators/validator";

type AddNewPostFormType = {
    newPost: string
}
const maxLength10 = maxLengthCreator(10)
const AddNewPostForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <Field validate={[required, maxLength10]} name={'newPost'} component={Textarea}/>
            <button>Add post</button>


        </form>
    )

}
export default reduxForm<AddNewPostFormType>({form: 'addNewPostForm'})(AddNewPostForm)