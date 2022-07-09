import { useState, useEffect } from 'react';

export const useUserInfo = (accessToken) => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            const response = await fetch('https://api.line.me/v2/profile', {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
            const data = await response.json();
            setUserInfo(data)
        }
        fetchUserInfo();
    }, [accessToken])

    return userInfo;
}
