import { combineReducers } from "redux-immutablejs";
import * as Redux from "redux";
import * as Immutable from "immutable";
// reducers
import counter from "./counter";
import routing from './routing';



const rootReducer = {
    counter,
    routing
};

// export type RootReducer = {
//     counter: CounterImmutableState
// }

export default combineReducers(rootReducer);
