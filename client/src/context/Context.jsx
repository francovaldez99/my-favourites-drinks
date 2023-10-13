import { createContext ,useContext} from "react";
const API_KEY="40eae70eacd30904cae3730e0fce3712"
const context=createContext()

export const ContextProvider=({children})=>{
    return(
    <context.Provider value={API_KEY}>
        {children}
    </context.Provider>)
}
export const ContextValues =()=>useContext(context)