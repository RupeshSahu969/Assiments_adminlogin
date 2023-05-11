import axios from "axios";
import * as types from "./actionTypes";


export const userLogin=(payload)=>(dispatch)=>{

    dispatch({type:types.LOGIN_REQUEST});
    return axios.get("https://newm.onrender.com/users",payload)
    .then((res)=>{
       return dispatch({type:types.LOGIN_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.LOGIN_FAILURE,payload:err});
    })

}


export const userRegister=(payload)=>(dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST});
    return axios.post("https://newm.onrender.com/users",payload)
    .then((res)=>{
        console.log(res.data);
       return dispatch({type:types.SIGNUP_SUCCESS,payload:res.data});
       
    })
    .catch((err)=>{
        dispatch({type:types.SIGNUP_FAILURE,payload:err});
    })

}