import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: TaskConfig
}

export type TaskConfig = {
  workTime: number;
  shortBreakTime: number;
  longBreakTime: number;
};
