import Input from '../DefaultInput/Input';
import { Save } from 'lucide-react';
import styles from './Setting.module.css';
import Button from '../Button/Button';
import { useRef } from 'react';
import useTaskContext from '../../contexts/TaskContext/useTaskContext';
import MessageType from '../../adapters/MessageType';


function Setting() {
    const {state, dispatch} = useTaskContext();
    const workTimeRef = useRef<HTMLInputElement>(null);
    const shortBreakTimeRef = useRef<HTMLInputElement>(null);
    const longBreakTimeRef = useRef<HTMLInputElement>(null);

    function handleSave(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        MessageType.dismiss();

        const workTime = Number(workTimeRef.current?.value);
        const shortBreakTime = Number(shortBreakTimeRef.current?.value);
        const longBreakTime = Number(longBreakTimeRef.current?.value);

        if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            MessageType.error('Por favor, insira valores numéricos válidos.');
            return;
        }
        if(workTime < 1 || workTime > 59) {
            MessageType.error('O tempo de foco deve ser entre 1 e 59 minutos.');
            return;
        }
        if(shortBreakTime < 1 || shortBreakTime > 59) {
            MessageType.error('O tempo de descanso curto deve ser entre 1 e 59 minutos.');
            return;
        }
        if(longBreakTime < 1 || longBreakTime > 59) {
            MessageType.error('O tempo de descanso longo deve ser entre 1 e 59 minutos.');
            return;
        }

        dispatch({
            type: 'CHANGE_TASK',
            payload: {
                workTime,
                shortBreakTime,
                longBreakTime
            }
        });
        return MessageType.success('Configurações salvas com sucesso!');
    }

    return (
        <form onSubmit={handleSave} className={styles.settingContainer}>
            <div className={styles.tile}>
                <h2>Configurações</h2>
                <p>Configure os minutos para as etapas do Pomodoro.</p>
            </div>
            <Input
                type='number'
                labelText='Foco(Min):'
                id='workTime'
                ref={workTimeRef}
                defaultValue={state.config.workTime}
            />
            <Input type='number'
                labelText='Descanso curto(Min):' 
                id='shortBreakTime' 
                ref={shortBreakTimeRef} 
                defaultValue={state.config.shortBreakTime}
            />
            <Input type='number'
                labelText='Descanso longo(Min):' 
                id='longBreakTime' 
                ref={longBreakTimeRef} 
                defaultValue={state.config.longBreakTime}
            />
            <Button className={styles.saveBTN} icon={<Save />} />
        </form>
    );
}
export default Setting;