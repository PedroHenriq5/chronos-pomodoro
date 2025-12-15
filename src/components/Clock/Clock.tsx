import { PlayIcon } from 'lucide-react';
import Styles from './Clock.module.css';

function Clock() {
    return (
        <section className={Styles.clockContainer}>
            <div className={Styles.timer}>
                <span>00:00</span>
            </div>
            <div className={Styles.task}>
                <label htmlFor="name"></label>
                <input type="text" id='name'/>
                <p>Nesse ciclo foque <span className='teste'>x</span> minutos</p>
            </div>
            <div className={Styles.containerCiclos}>
                <p>Ciclos concluídos</p>
            </div>
            <div className={Styles.startButton}>
                <button ><PlayIcon/></button>
            </div>

        </section>
    );

}
export default Clock;