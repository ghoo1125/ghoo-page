import React, { useEffect } from 'react';

export const CongratulationsMessage = ({ numberOfClicks, threshold, onHide }) => {
    useEffect(() => {
        return () => console.log("Congratulations message unmounting!");
    }, [])

    return numberOfClicks >= threshold
        ? <>
            <h1>Congratulations! You have reached the {threshold}.</h1>
            <button onClick={onHide}>Hide</button>
        </>
        : null;
}
