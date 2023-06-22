import counterReducer from "./Counter";
import LogReducer from './isLogged';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    //(given name anything)    
    counter: counterReducer,  //reducername
    log: LogReducer
})

export default allReducers;