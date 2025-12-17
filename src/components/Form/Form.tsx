import styles from './Form.module.css';
import Input from '../DefaultInput/Input';

function Form() {
    return (
        <form action="" className={styles.form}>
            <div className={styles.formRow}>
                <Input labelText='teste' id='input' type='text' placeholder='Digite aqui'/>
            </div>
            <div className={styles.formRow}>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.formRow}>
                <p>Ciclos</p>
                <p>0 0 0 </p>
            </div>
            <div className={styles.formRow}>
                <button>Enviar</button>
            </div>
        </form>
    )
}

export default Form;