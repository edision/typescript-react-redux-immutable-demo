import { combineReducers } from "redux-immutablejs";

// reducers
import counter from "./counter";
import routing from './routing';

const rootReducer = {
    counter,
    routing
};

export default combineReducers(rootReducer);
