import React from 'react'
import { useTimer } from 'react-timer-hook'

const Timer = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    // localStorage.setItem('time',JSON.stringify({hours:hours,minutes:minutes,seconds:seconds}));
    return (
        <>
            <h4>{hours}:{minutes}:{seconds}</h4>
        </>
    )
}

export default Timer