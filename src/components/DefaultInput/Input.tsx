import styles from './Input.module.css'

type InputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

function Input({id, type, labelText, ...rest}: InputProps) {
    return (
        <>
            {labelText ? <label htmlFor={id}>{labelText}</label> : null} 
            <input type={type} id={id} className={styles.input} {...rest}/>
        </>
    );
}

export default Input;