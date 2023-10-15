import { createContext ,useContext, useEffect,useState} from "react";
import { fetchMovies } from "../api/movies";
const API_KEY="40eae70eacd30904cae3730e0fce3712"
const context=createContext()

export const ContextProvider=({children})=>{
    const [movies,setMovies]=useState([])
    useEffect(() => {
async function GetMovies(type,searchKey) {
    try {
        const data =await fetchMovies(type,searchKey)
         setMovies(data.data.results)
         
    } catch (error) {
        console.log(error);
    }
}
 GetMovies("discover","")
}, [])

console.log(movies);
return(
    <context.Provider value={API_KEY}>
        {children}
    </context.Provider>)
}
export const ContextValues =()=>useContext(context)