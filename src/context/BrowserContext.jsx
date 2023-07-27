import { createContext, useContext, useReducer } from "react";
import BrowserReducer from "../reducer/Browser-reducer";

const initialValue = {
    name: "",
}

const BrowserContext = createContext(initialValue);

const BrowserProvider =({children}) => {
    const [{name}, Browserdispatch] = useReducer(BrowserReducer, initialValue);
    return(
    <BrowserContext.Provider value={{name, Browserdispatch}}>
    {children}
    </BrowserContext.Provider>
    )
}

const useBrowser = () => useContext(BrowserContext);

export {BrowserProvider, useBrowser};
