import { Trash2Icon } from "lucide-react";
import Button from "../Button/Button";
import Styles from './Historys.module.css';

function Historys() {
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
            <div className="responsiveTable">
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estudar</td>
                            <td>25min</td>
                            <td>20/04/2025 08:00</td>
                            <td>Completa</td>
                            <td>Foco</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Historys;