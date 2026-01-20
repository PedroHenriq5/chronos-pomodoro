import Styles from './Clock.module.css';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';
import { useContext } from 'react';

function Clock() {

    const { state, setState } = useContext(TaskContext);

    return (
        <section className={Styles.clockContainer}>
            <div className={Styles.timer}>
                <span>{state.formattedSecondsRemaining}</span>
            </div>
        </section>
    );

}
export default Clock;