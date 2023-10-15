import axios from "axios";

const intance=axios.create({
    baseURL:"http://localhost:3001",
    withCredentials:true
})

export default intance