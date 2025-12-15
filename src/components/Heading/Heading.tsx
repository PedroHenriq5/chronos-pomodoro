import { ClockIcon, HouseIcon, Settings, Sun, TimerIcon } from 'lucide-react';
import styles from './Heading.module.css'


function Heading() {
    return (
        <header className={styles.heading}>
            <TimerIcon size={50}  className={styles.TimerIcon}/>
            <h1>Chronos</h1>
            <div className={styles.iconContainer}>
                <button className={styles.BTNIcon}><HouseIcon/></button>
                <button className={styles.BTNIcon}><ClockIcon/></button>
                <button className={styles.BTNIcon}><Settings/></button>
                <button className={styles.BTNIcon}><Sun/></button>
            </div>
        </header>
    );
}

export default Heading;