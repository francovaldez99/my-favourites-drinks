import axios from "./axios"

export const register =(newUser)=>axios.post("/user/register",newUser)

export const login =(user)=>axios.post("/user/login",user)
