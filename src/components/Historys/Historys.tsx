import { Trash2Icon } from "lucide-react";
import Button from "../Button/Button";
import Styles from './Historys.module.css';

function Historys(){
    return(
        <div className={Styles.HistorysContainer}>
            <div className={Styles.HistorysHeader}>
                <p>History</p>
                <Button className={Styles.TrashButton} icon={<Trash2Icon />} ></Button>
            </div>

        </div>
    )
}

export default Historys;