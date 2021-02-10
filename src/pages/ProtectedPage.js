import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export const ProtectedPage = () => {
    const history = useHistory();
    const isAuthed = false;

    useEffect(() => {
        if (!isAuthed) {
            history.push('/');
        }
    });
    return (<h1>Only authorized users can see this page!!!</h1>);
}