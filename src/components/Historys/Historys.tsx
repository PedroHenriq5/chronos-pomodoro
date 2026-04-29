import { Trash2Icon } from "lucide-react";
import Button from "../Button/Button";
import Styles from './Historys.module.css';
import useTaskcontext  from "../../contexts/TaskContext/useTaskContext";
import FormatDate from "../../utils/FormatDate";

function Historys() {
    const { state } = useTaskcontext();

    return (
        <div className={Styles.HistorysContainer}>
            <div className={Styles.HistorysHeader}>
                <span>History</span>
                <span >
                    <Button
                        color="red"
                        icon={<Trash2Icon />}
                        className={Styles.button}
                        aria-label="Apagar historico">
                    </Button>
                </span>
            </div>
            <div className={Styles.responsiveTable}>
                <table>
                    <thead>
                        <tr>
                            <th>tarefa</th>
                            <th>Duração</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.tasks.map(task => {
                            return(
                                <tr key={task.id}>
                                    <td>{task.name}</td>
                                    <td>{task.duration}min</td>
                                    <td>{FormatDate(task.startDate)}</td>
                                    <td>{task.type}</td>
                                    <td>{task.type}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Historys;