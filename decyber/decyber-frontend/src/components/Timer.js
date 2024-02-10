import React, { useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import userContext from '../context/users/userContext';

const Timer = ({ expiryTimestamp }) => {
    const user_detail = useContext(userContext);
    const { user, updateUser } = user_detail;
    const {
        seconds,
        minutes,
        hours,
    } = useTimer({ expiryTimestamp, onExpire: () => console.log("expired") });

    console.log(seconds, minutes, hours);
    return (
        <>
            <h4>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h4>
        </>
    );
}

export default Timer;
