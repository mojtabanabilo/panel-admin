import { createContext, useContext, useState } from 'react';
import { TUserWidth } from '../utils/types/type';
import { ICreateProduct } from '../utils/types/interface';


const contextProvider = createContext<any | undefined>(undefined);

export const MyProvider = ({ children } : any | null) => {
    // states
    const [hover, setHover] = useState<boolean>(false);
    const [sidebar, setSidebar] = useState<boolean>(false);    
    const [userWidth, setUserWidth] = useState<TUserWidth>(null);
    const [product, setProduct] = useState<ICreateProduct>({name: "", count: "", price: ""});
    const [data, setData] = useState<Array<ICreateProduct>>([]);
    const [modalAdd, setModalAdd] = useState<boolean>(false);
    
    return <contextProvider.Provider value={{sidebar, setSidebar, userWidth, setUserWidth, hover, setHover, product, setProduct, data, setData, modalAdd, setModalAdd}}>
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