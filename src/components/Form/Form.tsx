import styles from './Form.module.css';
import Input from '../DefaultInput/Input';
import Cyclos from '../Cycles/Cycles';
import Button from '../Button/Button';
import { PlayCircleIcon } from 'lucide-react';
import {  useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import useTaskContext from '../../contexts/TaskContext/useTaskContext';
import NextCycle from '../../utils/NextCycle';
import TypeNextCycle from '../../utils/TypeNextCycle';
import FormatSecondsToMinutes from '../../utils/formatSecondsToMinutes';

function Form() {
    const { state, setState } = useTaskContext();

    const taskNameInput = useRef<HTMLInputElement>(null);
    const nextCycle = NextCycle(state.currentCycle);    
    const typeNextCycle = TypeNextCycle(nextCycle);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!taskNameInput.current) return
        const taskName = taskNameInput.current?.value.trim();
        if (!taskName){
            alert('Por favor, insira um nome para a tarefa.');
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

        const secondRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                config: {...prevState.config},
                currentCycle: nextCycle,
                secondRemaining,
                formattedSecondsRemaining: FormatSecondsToMinutes(secondRemaining),
                tasks: [...prevState.tasks, newTask],
            }
        })
    };
    return (
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
                <Input id='input' type='text' placeholder='Digite aqui' ref={taskNameInput} />
            </div>
            <div className={styles.formRow}>
                <p>Nesse ciclo foque por {state.formattedSecondsRemaining}</p>
            </div>
            <div className={styles.formRow}>
                <Cyclos />
            </div>
            <div className={styles.formRow}>
                <Button icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}

export default Form;