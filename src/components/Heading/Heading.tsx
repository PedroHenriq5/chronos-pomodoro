import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';
import styles from './Heading.module.css'


function Heading() {
    return (
        <header className={styles.heading}>
            <div className={styles.logo}>
                <a className={styles.logolink} href="#">
                    <TimerIcon/>
                    <span>Choronos</span>
                </a>
            </div>
            <div className={styles.linkContainer}>
                <a href='#' className={styles.linkIcon}><HouseIcon/></a>
                <a href='#' className={styles.linkIcon}><HistoryIcon/></a>
                <a href='#' className={styles.linkIcon}><SettingsIcon/></a>
                <a href='#' className={styles.linkIcon}><SunIcon/></a>
            </div>
        </header>
    );
}

export default Heading;