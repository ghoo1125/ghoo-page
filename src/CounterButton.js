import React, { useEffect } from 'react';
import { DangerButton } from './Button';

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    useEffect(() => {
        console.log('useEffect function called');
    }, [])

    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <DangerButton buttonColor="red" onClick={onIncrement}>Click Me!</DangerButton>
        </>
    )
}