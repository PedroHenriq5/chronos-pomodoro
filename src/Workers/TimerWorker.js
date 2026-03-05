let isRunning = false;
let timerId;

self.onmessage = (event) => {
    if(isRunning) return;
    isRunning = true;
    
    const state = event.data;
    const {activeTask, secondsRemaining} = state;
    const startDate = activeTask?.startDate ?? Date.now();
    
    const endDate = startDate + secondsRemaining * 1000;

    const now = Date.now();
    let countDownSeconds = Math.ceil((endDate - now) / 1000);

    function tick(){
        self.postMessage(countDownSeconds);
        const now = Date.now();
        countDownSeconds = Math.floor((endDate - now) / 1000);
        
        if(countDownSeconds <= 0){
            self.postMessage(0);
            isRunning = false;
            clearTimeout(timerId);
            return;
        }

        timerId = setTimeout(tick, 1000);
    }
    tick();
}
