import Input from '../DefaultInput/Input';
import { Save } from 'lucide-react';
import styles from './Setting.module.css';
function Setting() { 
    return (
        <div className={styles.settingContainer}> 
            <div className={styles.tile}>
                <h2>Configurações</h2> 
                <p>Configure os minutos para as etapas do Pomodoro.</p>
            </div>
            <Input type='text'/>
            <Input type='text'/>
            <Input type='text'/>
            {/* <label  htmlFor="foco">Foco(Min):</label>
            <input className={styles.input} type="text" id='foco'/>
            <label htmlFor="descansoCurto">Descanso curto(Min):</label>
            <input type="text" id='descansoCurto'/>
            <label htmlFor="descansoLongo">Descanso longo(Min):</label>
            <input type="text" id='descansoLongo'/> */}
            <button className={styles.BTNIcon}><Save/></button>
        </div>
    ); 
} 
export default Setting;