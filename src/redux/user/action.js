import { GET_USER,SET_USER } from "./actionType"

export const getUser = () => {
    return{
        type : GET_USER
    }
}

export const setUser= (user) =>{
    return{
        type :SET_USER,
        payload : user
    }
}