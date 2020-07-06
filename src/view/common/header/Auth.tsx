import { createContext, useContext } from 'react';

export const AuthContext = createContext<{authTokens: any, setAuthTokens: (data: object) => void}>({authTokens: '', setAuthTokens: (data: object) => {return data}});
export const useAuth = () => {
    return useContext(AuthContext);
};
