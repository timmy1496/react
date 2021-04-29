import {Field} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

let maxLength30 = maxLengthCreator(30 ,1);

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name={'text'} validate={[required, maxLength30]} id="" cols="30" rows="10"/></div>
            <button>Add post</button>
            <div>
                <button>Remove</button>
            </div>
        </form>
    );
}

export default Form;