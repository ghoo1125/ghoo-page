import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';

export const CounterButtonPage = () => {
    // const { name } = useParams();
    const location = useLocation();
    const startingValue = parse(location.search).startingValue || 0;
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
            {/* <h1>{name}'s CounterButton Page</h1> */}
            <h1>The CounterButton Page</h1>
            <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
                <CongratulationsMessage
                    threshold={10}
                    onHide={() => setHideMessage(true)} />
            </DisplayIf>
            <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
        </>
    );
}