import gravitational from '../assets/audios/gravitational_beep.mp3'

function LoadBeep() {
    const audio = new Audio(gravitational);
    audio.load();
    return () => {
        audio.currentTime = 0;
        audio.play();

    }
}

export default LoadBeep;