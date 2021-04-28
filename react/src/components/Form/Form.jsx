import {Field} from "redux-form";
import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={"textarea"} name={'text'} id="" cols="30" rows="10"/></div>
            <button>Add post</button>
            <div>
                <button>Remove</button>
            </div>
        </form>
    );
}

export default Form;