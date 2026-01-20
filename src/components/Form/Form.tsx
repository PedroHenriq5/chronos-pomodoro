import styles from './Form.module.css';
import Input from '../DefaultInput/Input';
import Cyclos from '../Cycles/Cycles';
import Button from '../Button/Button';
import { PlayCircleIcon } from 'lucide-react';
import {  useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import useTaskContext from '../../contexts/TaskContext/useTaskContext';
import NextCycle from '../../utils/NextCycle';

function Form() {
    const { state, setState } = useTaskContext();

    const taskNameInput = useRef<HTMLInputElement>(null);
    const nextCycle = NextCycle(state.currentCycle);

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
            duration: 1,
            type: 'workTime',
        };
        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                config: {...prevState.config},
                currentCycle: nextCycle,
                secondRemaining: newTask.duration * 60,
                formattedSecondsRemaining: "00:00",
                tasks: [...prevState.tasks, newTask],
            }
        })
    };
    console.log(nextCycle)
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