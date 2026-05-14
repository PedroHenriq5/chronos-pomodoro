import type { TaskModel } from "../../models/TaskModel"
import type { TaskStateModel } from "../../models/TaskStateModel";

export type TaskActionTypesType = typeof TaskActionTypes[keyof typeof TaskActionTypes];

export const TaskActionTypes = {
  START_TASK : 'START_TASK',
  INTERRUPT_TASK : 'INTERRUPT_TASK',
  RESET_STATE : 'RESET_STATE',
  COUNT_DOWN : 'COUNT_DOWN',
  COMPLETE_TASK : 'COMPLETE_TASK',
  CHANGE_TASK : 'CHANGE_TASK',  
} as const;

export type TaskActionsWithPayload =
| {
    type: typeof TaskActionTypes.START_TASK,
    payload: TaskModel
} | {
    type: typeof TaskActionTypes.COUNT_DOWN,
    payload: {secondRemaining: number}
} | {
    type: typeof TaskActionTypes.CHANGE_TASK,
    payload: TaskStateModel['config']
};

export type TaskActionsWithoutPayload =
| {
    type: typeof TaskActionTypes.RESET_STATE,
} | {
    type: typeof TaskActionTypes.INTERRUPT_TASK,
} |{
    type: typeof TaskActionTypes.COMPLETE_TASK,
}

export type TaskActionModel = TaskActionsWithPayload | TaskActionsWithoutPayload;