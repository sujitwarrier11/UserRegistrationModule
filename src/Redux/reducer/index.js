import { combineReducers } from 'redux';
import userReducer from '@root/src/Redux/reducer/user';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
  user: userReducer,
  router: connectRouter(history)
});

export default createRootReducer;

