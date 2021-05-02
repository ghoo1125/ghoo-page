import React from 'react';
import { Greeting } from '../Greeting';
import { useLocation } from "react-router-dom";
import { fetchToken } from '../fetchToken';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const HomePage = () => {
    let query = useQuery();
    const authorizeCode = query.get("code")
    if (authorizeCode != null) {
        console.log(authorizeCode)
        const token = fetchToken(authorizeCode)
        console.log(token)
    }

    return (
        <div>
            <h1>The Home Page!</h1>
            <Greeting name="GHOO" numberOfMessages={123} />
        </div>
    )
}
