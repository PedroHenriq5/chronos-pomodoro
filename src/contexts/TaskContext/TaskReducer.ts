import type { TaskStateModel } from "../../models/TaskStateModel";
import type { TaskActionModel } from "./TaskActions";
import { TaskActionTypes } from "./TaskActions";
import NextCycle from '../../utils/NextCycle';
import FormatSecondsToMinutes from "../../utils/FormatSecondsToMinutes";
import { initialTaskState } from "./initialTaskState";


function TaskReducer(
    state: TaskStateModel,
    action: TaskActionModel
){
    
    switch(action.type){
        case TaskActionTypes.START_TASK: {

            const nextCycle = NextCycle(state.currentCycle);  
            const newTask = action.payload;
            const secondRemaining = newTask.duration * 60;

            return {
                ...state,
                activeTask: newTask,
                config: {...state.config},
                currentCycle: nextCycle,
                secondRemaining,
                formattedSecondsRemaining: FormatSecondsToMinutes(secondRemaining),
                tasks: [...state.tasks, newTask],
            }
        };
        case TaskActionTypes.INTERRUPT_TASK:
            return {
    
                ...state,
                activeTask: null,
                secondRemaining: 0,
                formattedSecondsRemaining: "00:00",
                tasks: state.tasks.map(task => {
                    if(state.activeTask && state.activeTask.id === task.id) {
                        return{
                            ...task,
                            interruptedDate: Date.now(),
                        }
                    }
                    return task;    
                })
            };
        case TaskActionTypes.RESET_STATE:
            return {...initialTaskState};
        case TaskActionTypes.COUNT_DOWN:
            return {
                ...state,
                secondRemaining: action.payload.secondRemaining,
                formattedSecondsRemaining: FormatSecondsToMinutes(action.payload.secondRemaining),
            };
        case TaskActionTypes.COMPLETE_TASK:
            return {
    
                ...state,
                activeTask: null,
                secondRemaining: 0,
                formattedSecondsRemaining: "00:00",
                tasks: state.tasks.map(task => {
                    if(state.activeTask && state.activeTask.id === task.id) {
                        return{
                            ...task,
                            completeDate: Date.now(),
                        }
                    }
                    return task;    
                })
            };
            case TaskActionTypes.CHANGE_TASK:
                return {
                    ...state,
                    config: action.payload,
                }
    }
     return state;
};

export default TaskReducer;