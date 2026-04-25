import styles from './Button.module.css'

type ButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;



function Button({ icon, color = 'green', className = '', ...props }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[color]} ${className}`}
            {...props}
        >
            {icon}
        </button>
    )
};

export default Button;