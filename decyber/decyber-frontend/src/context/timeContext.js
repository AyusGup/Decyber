// TimeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const TimeContext = createContext();

export const useTime = () => useContext(TimeContext);

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setTime(new Date());
  };

  // Update time every second
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={{ time }}>
      {children}
    </TimeContext.Provider>
  );
};

