import styles from './Form.module.css';
import Input from '../DefaultInput/Input';
import Cyclos from '../Cycles/Cycles';
import Button from '../Button/Button';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import useTaskContext from '../../contexts/TaskContext/useTaskContext';
import NextCycle from '../../utils/NextCycle';
import TypeNextCycle from '../../utils/TypeNextCycle';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActions';
import Tips from './Tips';
import MessageType from '../../adapters/MessageType';

function Form() {
    const { state, dispatch } = useTaskContext();

    const taskNameInput = useRef<HTMLInputElement>(null);
    const nextCycle = NextCycle(state.currentCycle);
    const typeNextCycle = TypeNextCycle(nextCycle);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        MessageType.dismiss();

        if (!taskNameInput.current) return
        const taskName = taskNameInput.current?.value.trim();
        if (!taskName) {
            MessageType.warning('Por favor, insira um nome para a tarefa.');
            return;
        };


        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptedDate: null,
            duration: state.config[typeNextCycle],
            type: typeNextCycle,
        };

        dispatch({
            type: TaskActionTypes.START_TASK,
            payload: newTask,
        })
    };

    function StopCycle() {
        MessageType.dismiss();
        MessageType.info('Ciclo interrompido.');
        dispatch({
            type: TaskActionTypes.INTERRUPT_TASK,
        })

    };




    return (
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
                <Input id='input' type='text' placeholder='Digite aqui' ref={taskNameInput} disabled={!!state.activeTask} />
            </div>
            <div className={styles.formRow}>
                <Tips />
            </div>
            {state.currentCycle > 0 && (
                <div className={styles.formRow}>
                    <Cyclos />
                </div>
            )}
            <div className={styles.formRow}>
                {!state.activeTask ? (
                    <Button type='submit' key="submit" icon={<PlayCircleIcon />} />
                ) : (
                    <Button type='button' color='red' key="stop" onClick={StopCycle} icon={<StopCircleIcon />} />
                )}
            </div>
        </form>
    )
}

export default Form;
