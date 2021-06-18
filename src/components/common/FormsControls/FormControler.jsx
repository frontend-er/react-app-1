import React from "react";
import styles from './FormControler.module.css';


export const Textarea = ({ input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div>
            <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
                <textarea {...input} {...props}/>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>


    )
}


export const Input = ({ input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div>
            <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
                <input {...input} {...props}/>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>


    )
}