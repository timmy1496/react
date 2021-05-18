import styles from "./FormsControl.module.css";
import {Field} from "redux-form";


const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '') }>
            <div>
                { props.children }
            </div>
            { hasError && <span>{ meta.error }</span> }
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, element, ...restProps} = props;
    return (
       <FormControl {...props} ><textarea {...input} {...restProps}/></FormControl>
    );
}

export const Input = (props) => {
    const {input, meta, element, ...restProps} = props;
    return (
        <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
    );
}

export const createField = (component, name, placeholder, validate, type = {}, text = null) => (
    <div>
        <Field component={component}
               name={name}
               placeholder={placeholder}
               validate={validate}
               {...type}
        /> {text}
    </div>
);