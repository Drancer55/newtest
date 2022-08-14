import React, { useState, useEffect } from 'react';
import './time.css'

const Clock = () => {

    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <>
            <p className='clock'>
                {dateState.toLocaleString('es-MX', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
            })}
            </p>
            <p className='calendar'>
                {dateState.toLocaleDateString('es-MX', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                })}
            </p>
        </>
    )
};

export default Clock;