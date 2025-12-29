import styles from './Form.module.css';
import Input from '../DefaultInput/Input';
import Cyclos from '../Cycles/Cycles';
import Button from '../Button/Button';  
import { PlayCircleIcon } from 'lucide-react';

function Form() {
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
    };
    return (
        <form action="" className={styles.form} onClick={handleSubmit}>
            <div className={styles.formRow}>
                <Input id='input' type='text' placeholder='Digite aqui'/>
            </div>
            <div className={styles.formRow}>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.formRow}>
                <Cyclos />
            </div>
            <div className={styles.formRow}>
                <Button icon= {<PlayCircleIcon />}/>
            </div>
        </form>
    )
}

export default Form;