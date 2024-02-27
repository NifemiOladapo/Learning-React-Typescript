import { useEffect, useRef, useState } from "react";

const Mutation = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
    };

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            stopTimer()
        }
    }, []);

    return (
        <div>
            <h1>Practice Typescript with mutation value</h1>
            <h2>{timer}</h2>
            <button onClick={stopTimer}>Stop timer</button>
        </div>
    );
};

export default Mutation;
