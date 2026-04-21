import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import TaskReducer from "./TaskReducer";
import TimerWorkerManager from "../../Workers/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";
import LoadBeep from "../../utils/LoadBeep";


type TaskContextProviderProps = {
    children: React.ReactNode;
}

function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(TaskReducer, initialTaskState)
    const worker = TimerWorkerManager.getInstance();
    const playBeepRef = useRef<ReturnType<typeof LoadBeep> | null>(null);

    useEffect(() => {
        worker.onmessage(e => {
            const countDownSeconds = e.data;
            if(countDownSeconds <= 0){
                if(playBeepRef.current){
                    playBeepRef.current();
                }
                dispatch({
                    type: TaskActionTypes.COMPLETE_TASK,
                });
                worker.terminate();
            } else{
                dispatch({
                    type: TaskActionTypes.COUNT_DOWN,
                    payload: {secondRemaining: countDownSeconds}
                });
            }

        });
    });


    useEffect(() => {
        if(!state.activeTask){
            worker.terminate();
        }

        document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro` 

        worker.postMessage({
            activeTask: state.activeTask,
            secondsRemaining: state.secondRemaining
        });
    }, [worker, state]);

    useEffect(() => {
        if(state.activeTask && playBeepRef.current === null){
            playBeepRef.current = LoadBeep();
        } else{
            playBeepRef.current = null;
        }

    }, [state.activeTask]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
};

export default TaskContextProvider;