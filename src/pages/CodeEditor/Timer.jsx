import { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
    const [seconds, setSeconds] = useState(() => {
        const savedSeconds = localStorage.getItem('seconds');
        return savedSeconds ? parseInt(savedSeconds, 10) : 0;
    });

    const [isActive, setIsActive] = useState(() => {
        const savedIsActive = localStorage.getItem('isActive');
        return savedIsActive ? JSON.parse(savedIsActive) : false;
    });

    useEffect(() => {
        // 컴포넌트가 처음 마운트될 때 자동으로 스톱워치를 시작하도록 설정
        setIsActive(true);
    }, []);

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => {
                    const newSeconds = seconds + 1;
                    localStorage.setItem('seconds', newSeconds); // localStorage에 초 저장
                    return newSeconds;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive]);

    useEffect(() => {
        localStorage.setItem('isActive', JSON.stringify(isActive));
    }, [isActive]);


    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time - (hours * 3600)) / 60);
        const seconds = time - (hours * 3600) - (minutes * 60);

        const hoursStr = hours < 10 ? "0" + hours : String(hours);
        const minutesStr = minutes < 10 ? "0" + minutes : String(minutes);
        const secondStr = seconds < 10 ? "0" + seconds : String(seconds);

        return `${hoursStr} : ${minutesStr} : ${secondStr}`;
    }

    return (
        <div className="container">
            <p className="times">{formatTime(seconds)}</p>
        </div>
    );
};

export default Timer;