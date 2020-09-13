import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, CALL_REGISTER, SET_UPLOAD_STATUS, SET_FILES, UPLOAD_FILE, GET_FILES } from '@root/src/Redux/constants';

const reducer = (state = {}, action) => { 
   switch(action.type){
      case GET_FILES:
      case UPLOAD_FILE:
      case CALL_REGISTER:
      case LOGIN: return state;
      case LOGIN_SUCCESS: return {
          ...state,
          ...action.payload
      }
      case LOGIN_FAILURE: return {
         ...state,
         error: action.payload
      }
      case SET_UPLOAD_STATUS: return {
         ...state,
         status: action.payload
      }
      case SET_FILES: return {
         ...state,
         files: action.payload
      }
      default: return state;
   }
};

export default reducer;