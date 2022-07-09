import { useLocation } from "react-router-dom";
import { useAccessToken } from '../useAccessToken';
import { useUserInfo } from "../useUserInfo";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const LoggedInPage = () => {
    const query = useQuery();
    const authorizeCode = query.get("code");

    const token = useAccessToken(authorizeCode);
    const userInfo = useUserInfo(token);

    return (
        <div>
            <h1>{userInfo.displayName}</h1>
            <img 
                style={{
                    borderRadius: "50%"
                }}
                src={userInfo.pictureUrl + "/large"}
                alt="">
            </img>
        </div>
    )
}