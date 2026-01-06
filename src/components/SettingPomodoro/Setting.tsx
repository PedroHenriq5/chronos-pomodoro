import Input from '../DefaultInput/Input';
import { Save } from 'lucide-react';
import styles from './Setting.module.css';
import Button from '../Button/Button';
function Setting() { 
    return (
        <div className={styles.settingContainer}> 
            <div className={styles.tile}>
                <h2>Configurações</h2> 
                <p>Configure os minutos para as etapas do Pomodoro.</p>
            </div>
            <Input type='number' labelText='Foco(Min):' id='foco'/>
            <Input type='number' labelText='Descanso curto(Min):' id='descansoCurto'/>
            <Input type='number' labelText='Descanso longo(Min):' id='descansoLongo'/>
            <Button className={styles.saveBTN} icon={<Save />} />
        </div>
    ); 
} 
export default Setting;