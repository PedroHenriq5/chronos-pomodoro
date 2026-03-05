import { initialTaskState } from "../contexts/TaskContext/initialTaskState";

let instance: TimerWorkerManager | null = null;
export type TimerWorkerMessage = {
    activeTask: typeof initialTaskState.activeTask;
    secondsRemaining: typeof initialTaskState.secondRemaining;
};

class TimerWorkerManager {
    private worker: Worker;

    private constructor() {
        this.worker = new Worker(
            new URL('./TimerWorker.js', import.meta.url),
            { type: 'module' }
    );
}

    static getInstance(){
        if(!instance){
            instance = new TimerWorkerManager();
        }

        return instance;
    }

    postMessage(message: TimerWorkerMessage){
        this.worker.postMessage(message);
        
    }

    onmessage(callback: (event: MessageEvent) => void){
        this.worker.onmessage = callback;
    }

    terminate(){
        this.worker.terminate();
        instance = null;
    }
}

export default TimerWorkerManager;