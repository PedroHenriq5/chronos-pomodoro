import Styles from './Historys.module.css';
import useTaskContext from "../../contexts/TaskContext/useTaskContext";
import FormatDate from "../../utils/FormatDate";
import StatusType from "../../utils/StatusType";
import sortTask, { type TaskOptions } from "../../utils/SortTask";
import { useState } from 'react';
import { Trash2Icon } from 'lucide-react';
import Button from '../Button/Button';



function Historys() {
    const { state } = useTaskContext();
    const [sortedField, setSortedField] = useState<TaskOptions>(
        () => {
            return {
                tasks: sortTask({ tasks: state.tasks }),
                field: "startDate",
                direction: "desc",
            };
        },
    );


    function handleSortedTasks({field}: Pick<TaskOptions, 'field'>) {
        setSortedField(sortedField => {
                const direction = sortedField.direction === "desc" ? "asc" : "desc";

                return {
                    ...sortedField,
                    field: field,
                    tasks: sortTask({ 
                        tasks: state.tasks,
                        field,
                        direction,
                    }),
                    direction
                };
            });
    }

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
                            <th onClick={() => handleSortedTasks({ field: "name" })}
                                className={Styles.clickableHeader}>
                                tarefa</th>
                            <th onClick={() => handleSortedTasks({ field: "duration" })}
                                className={Styles.clickableHeader}>
                                Duração</th>
                            <th onClick={() => handleSortedTasks({ field: "startDate" })}
                                className={Styles.clickableHeader}>
                                Data</th>
                            <th 
                                className={Styles.clickableHeader}>
                                Status</th>
                            <th onClick={() => handleSortedTasks({ field: "type" })}
                                className={Styles.clickableHeader}>
                                Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedField.tasks.map(task => {
                            const taskTypeDictionary = {
                                workTime: "Foco",
                                shortBreakTime: "Pausa Curta",
                                longBreakTime: "Pausa Longa"

                            }

                            return (
                                <tr key={task.id}>
                                    <td>{task.name}</td>
                                    <td>{task.duration}min</td>
                                    <td>{FormatDate(task.startDate)}</td>
                                    <td>{StatusType(task, state.activeTask)}</td>
                                    <td>{taskTypeDictionary[task.type]}</td>
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