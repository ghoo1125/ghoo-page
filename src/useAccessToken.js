import { useState, useEffect } from 'react';

export const useAccessToken = (authorizeCode) => {
    const [token, setToken] = useState({ token: "" });

    useEffect(() => {
        const fetchAccessToken = async () => {
            let redirectUrl = 'https://58b6-2001-b400-e431-da39-c51f-853a-b054-26e4.jp.ngrok.io/logged-in'
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'grant_type': 'authorization_code',
                    'code': authorizeCode,
                    'client_id': '1655869470',
                    'client_secret': '7817b5b25bd0439623621f95570eaa0a',
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
