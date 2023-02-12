import { legacy_createStore, combineReducers,applyMiddleware} from "redux";
// import thunk from "redux-thunk";

import { authReducer } from "./Auth/authReducer";
import logger from 'redux-logger';
// redux-logger

const rootReducer = combineReducers({
  authReducer,
  
});


const store = legacy_createStore(rootReducer,applyMiddleware(logger));

export default store;
