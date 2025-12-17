import { PlayIcon } from 'lucide-react';
import Styles from './Clock.module.css';

function Clock() {
    return (
        <section className={Styles.clockContainer}>
            <div className={Styles.timer}>
                <span>00:00</span>
            </div>
        </section>
    );

}
export default Clock;