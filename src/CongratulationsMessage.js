import React, { useEffect } from 'react';
import { Button } from './Button';

export const CongratulationsMessage = ({ threshold, onHide }) => {
    return (
        <>
            <h1>Congratulations! You have reached the {threshold}.</h1>
            <Button onClick={onHide}>Hide</Button>
        </>
    )
}
