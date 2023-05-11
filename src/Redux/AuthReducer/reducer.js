import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action ) => {
  const {type,payload}=action;
  switch(type){

    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading:true,
        isAuth:false

      }

      case types.LOGIN_SUCCESS:
        return {
          ...state,
          isLoading:false,
          isAuth:true,
          token:payload,
          isError:false
        }

        case types.LOGIN_FAILURE:
          return {
            ...state,
            isLoading:false,
            isAuth:false,
            isError:true,
            token:[]
          }
    


    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading:true,
        isAuth:false

      }

      case types.SIGNUP_SUCCESS:
        return {
          ...state,
          isLoading:false,
          isAuth:true,
          token:payload,
          isError:false
        }

        case types.SIGNUP_FAILURE:
          return {
            ...state,
            isLoading:false,
            isAuth:false,
            isError:true,
            token:[]
          }
      

    default:
      return state;
  }

};
