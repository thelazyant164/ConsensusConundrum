import React from 'react';
import '../style/Timer.css';

export const resetCountdown = (restart, delaySeconds) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + delaySeconds);
    restart(time);
}

export const Timer = ({ second }) => {
    return (
        <div className="Timer">
            <h1>Would you rather...</h1>
            <div className="Display">
                <span>{second}</span>
            </div>
        </div>
    );
}