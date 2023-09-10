import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { TUserWidth } from '../utils/types/type';

const contextProvider = createContext<any | undefined>(undefined);

export const MyProvider = ({ children } : any | null) => {
    // states
    const [signUp, setSignUp] = useState<boolean | null>(false);
    const [sidebar, setSidebar] = useState<boolean | null>(false);
    const [userWidth, setUserWidth] = useState<TUserWidth>(null);

    return <contextProvider.Provider value={{sidebar, setSidebar, userWidth, setUserWidth}}>
        {children}
    </contextProvider.Provider>;
};

export const useMyContext = () => {
    const context = useContext(contextProvider);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};