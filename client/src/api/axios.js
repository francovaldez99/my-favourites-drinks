import axios from "axios";


const intance=axios.create({
    baseURL:import.meta.env.VITE_REACT_APP_URL_SERVER,
  
})
console.log(import.meta.env.VITE_REACT_APP_URL_SERVER);

export default intance