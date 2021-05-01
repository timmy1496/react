import styles from "./FormsControl.module.css";


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