import  * as types from "./actionTypes"


const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action,payload) => {
  switch(action.type)
  {
case types.GET_ADMIN_REQUEST:{
        return{
          ...state,
          isLoading:true,
          isError:false,
        }
        }
        case types.GET_ADMIN_SUCCESS:{
          return{
            ...state,
            isLoading:false,
            isError:false,
            product:action.payload
          }
          }
          case types.GET_ADMIN_FAILURE:{
            return{
              ...state,
              isLoading:false,
              isError:true,
              product:action.payload
            }
            }

            case types.ADD_ADMIN_REQUEST:{
              return{
                ...state,
                isLoading:true,
                isError:false,
                
              }
              }

              case types.ADD_ADMIN_SUCCESS:{
                return{
                  ...state,
            isLoading:false,
            isError:false,
            product:action.payload
                  
                }
                }

                case types.ADD_ADMIN_FAILURE:{
                  return{
                    ...state,
                    isLoading:false,
                    isError:true,
                    product:action.payload
                    
                  }
                  }
                  case types.SORT_PRICE:
                    return { ...state, product:payload };

            default:
              return state ;
  }
  
};
