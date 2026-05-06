import type { TaskModel } from "../models/TaskModel";

 export type  TaskOptions ={
    tasks: TaskModel[];
    direction?: "asc" | "desc"
    field?: keyof TaskModel;
}

function sortTask({ 
    tasks = [],
    direction = "desc", 
    field = "startDate"
}: TaskOptions): TaskModel[] {

    return tasks.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    /* Tratando os valores nulos */

    if(aValue === null && bValue === null) return 0;
    if(aValue === null) return 1;
    if(bValue === null) return -1;

        /* Comparando valores do tipo número */

    if(typeof aValue === "number" && typeof bValue === "number"){
        return direction === "asc" 
        ? aValue - bValue 
        : bValue - aValue;
    }

    /* Comparando valores do tipo string */
    if(typeof aValue === "string" && typeof bValue === "string"){
        return direction === "asc" 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue);
    }

    return 0;

    });


}

export default sortTask;