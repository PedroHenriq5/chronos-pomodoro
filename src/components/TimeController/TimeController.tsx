/* import Clock from "../Clock/Clock";
import Form from "../Form/Form";
import { useState } from "react";



function TimeController() {
    const [number, setNumber] = useState(0);
    function increment() {
        setNumber(prevState => prevState + 1);
    };

    return (
        <section>
            <Clock value={number} />
            <Form  onStart={increment}/>
        </section>
    )
};

export default TimeController; */