import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '@root/src/Redux/constants';

const reducer = (state = {}, action) => { 
   switch(action.type){
      case LOGIN: return state;
      case LOGIN_SUCCESS: return {
          ...state,
          ...action.payload
      }
      case LOGIN_FAILURE: return {
         ...state,
         error: action.payload
      }
      default: return state;
   }
};

export default reducer;