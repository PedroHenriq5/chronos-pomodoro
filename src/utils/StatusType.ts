
import type { TaskModel } from "../models/TaskModel";



function StatusType(task: TaskModel, activeTask: TaskModel | null) {

    if(task.interruptedDate) return "Interrompida"; 
    if(task.completeDate) return "Concluída";
    if(task.id === activeTask?.id) return "Em Progresso";
    return "Abandonada";
}

export default StatusType;