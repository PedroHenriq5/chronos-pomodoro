import styles from './Button.module.css'

type ButtonProps = {
      icon: React.ReactNode;
      color?: 'green' | 'red';
} & React.ComponentProps<'button'>;



function Button({icon, color = 'green', ...props}: ButtonProps){
    return (
        <section className={styles.container}>
            <button className={`${styles.button} ${styles[color]}`} {...props}>{icon}</button>
        </section>
    )
};

export default Button;