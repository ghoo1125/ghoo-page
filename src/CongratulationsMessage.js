import React, { useEffect } from 'react';

export const CongratulationsMessage = ({ threshold, onHide }) => {
    return (
        <>
            <h1>Congratulations! You have reached the {threshold}.</h1>
            <button onClick={onHide}>Hide</button>
        </>
    )
}
