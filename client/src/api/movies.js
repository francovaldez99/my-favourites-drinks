import axios from "axios"

export const fetchMovies=(type,searchKey)=>{
   return axios.get("https://api.themoviedb.org/3/"+type+"/movie",{
        params:{
            api_key:"40eae70eacd30904cae3730e0fce3712",
            query:searchKey
        }
    })
   
}