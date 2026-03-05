import styles from './Cycles.module.css'
import TypeNextCycle from '../../utils/TypeNextCycle';
import useTaskContext from '../../contexts/TaskContext/useTaskContext';
import NextCycle from '../../utils/NextCycle';

function Cycles() {
    const { state } = useTaskContext();
    const cycleStep = Array.from({ length: state.currentCycle });
    const cycleDescriptionMap = {
        workTime: 'Foco',
        shortBreakTime: 'Pausa Curta',
        longBreakTime: 'Pausa Longa',
    };


    return (
        <div className={styles.cycles}>
            <span>Ciclos</span>
            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => {
                    const cycleNumber = NextCycle(index);
                    const typeCycle = TypeNextCycle(cycleNumber);
                    return <span key={cycleNumber} className={`${styles.cycleDot} ${styles[typeCycle]}`} title={`Indicador de ciclo de ${cycleDescriptionMap[typeCycle]}`}></span>;
                })}
            </div>
        </div>
    )
}
    
export default Cycles;
