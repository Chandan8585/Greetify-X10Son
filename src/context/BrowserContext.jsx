import { createContext, useContext, useReducer } from "react";
import BrowserReducer from "../reducer/Browser-reducer";

const initialValue = {
    name: "",
    time: "",
    message: "",
    task: null,
}

const BrowserContext = createContext(initialValue);

const BrowserProvider =({children}) => {
    const [{name, time, message, task}, Browserdispatch] = useReducer(BrowserReducer, initialValue);
    return(
    <BrowserContext.Provider value={{name, time,task, message, Browserdispatch}}>
    {children}
    </BrowserContext.Provider>
    )
}

const useBrowser = () => useContext(BrowserContext);

export {BrowserProvider, useBrowser};
