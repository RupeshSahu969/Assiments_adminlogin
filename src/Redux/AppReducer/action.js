
import axios from "axios"
import  * as types from "../AppReducer/actionTypes"

export const getAdminProduct = (payload) =>(dispatch) => 
{
    dispatch({ type: types.GET_ADMIN_REQUEST });
    return axios
      .get(`https://newm.onrender.com/companies`,payload)
      .then((res) => {
      
        dispatch({ type: types.GET_ADMIN_SUCCESS, payload: res.data });
      })
      .catch(() => dispatch({ type: types.GET_ADMIN_FAILURE }));
  };

  export const adddata = (payload) => (dispatch) =>
   {
    dispatch({ type: types.ADD_ADMIN_REQUEST });
    return axios
      .post("https://newm.onrender.com/companies", payload)
      .then(() => {
          getAdminProduct()
      })
  };
  
  export const UpdateProduct=(id,payload)=>(dispatch)=>
  {
    dispatch({type:types.EDIT_ADMIN_REQUEST});
    return axios.patch(`https://newm.onrender.com/companies/${id}`,payload)
    .then((res)=>{
        dispatch({type:types.EDIT_ADMIN_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:types.EDIT_ADMIN_FAILURE,payload:err});
    })
  
  }
  
  
  export const deleteProduct=(id)=>dispatch=>
  {
    dispatch({type:types.DELETE_ADMIN_REQUEST})
    return axios
    .delete(`https://newm.onrender.com/companies/${id}`).then((r)=>{

        dispatch({type:types.DELETE_ADMIN_SUCCESS})
        
    }).catch((err)=>
    dispatch({type:types.DELETE_ADMIN_FAILURE,payload:err}))
  }
  

  export const getfilter = (payload) =>(dispatch) => 
{
    dispatch({ type: types.GET_ADMIN_REQUEST });
    return axios
      .get(payload)
      .then((res) => {
      
        dispatch({ type: types.GET_ADMIN_SUCCESS, payload: res.data });
      })
      .catch(() => dispatch({ type: types.GET_ADMIN_FAILURE }));
  };
  export const sortPrice = (data) => {
    return {
      type: types.SORT_PRICE,
      payload: data,
    };
  };
  
  