import { useState, useEffect } from 'react';
const config = require("./config.json");

export const useAccessToken = (authorizeCode) => {
    const [token, setToken] = useState({ token: "" });

    useEffect(() => {
        const fetchAccessToken = async () => {
            let redirectUrl = 'https://79ea-2001-b400-e488-33b-c8ac-3dbc-19d7-507d.jp.ngrok.io/logged-in'
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'grant_type': 'authorization_code',
                    'code': authorizeCode,
                    'client_id': '1655869470',
                    'client_secret': config.client_secret,
                    'redirect_uri': redirectUrl
                })
            };
            const response = await fetch('https://api.line.me/oauth2/v2.1/token', requestOptions);
            const data = await response.json();
            setToken(data.access_token)
        }
        fetchAccessToken();
    }, [authorizeCode])

    return token;
}
