import useTaskContext from "../../../contexts/TaskContext/useTaskContext";
import NextCycle from "../../../utils/NextCycle";
import TypeNextCycle from "../../../utils/TypeNextCycle";

function Tips() {
    const { state } = useTaskContext();
    const nextCycle = NextCycle(state.currentCycle);
    const typeNextCycle = TypeNextCycle(nextCycle);

    const tipsForActionTask = {
            workTime: <span> Nesse ciclo foque por {state.config.workTime}min</span>,
            shortBreakTime:<span> Nesse ciclo descanse por {state.config.shortBreakTime}min</span>,
            longBreakTime: <span> Nesse ciclo descanse por {state.config.longBreakTime}min</span>,
    }

    const tipsForNoActionTask ={
        workTime: <span> Proximo ciclo sera de {state.config.workTime}min</span>,
        shortBreakTime:<span> Proximo ciclo sera de {state.config.shortBreakTime}min</span>,
        longBreakTime: <span> Proximo ciclo sera de {state.config.longBreakTime}min</span>,
    }
  return (
        <>
            {!!state.activeTask && tipsForActionTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActionTask[typeNextCycle]}
        </>
  )
}

export default Tips;