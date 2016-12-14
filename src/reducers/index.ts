import { combineReducers } from "redux-immutablejs";
import * as Redux from "redux";
import * as Immutable from "immutable";
// reducers
import counter from "./counter";
import routerReducer from './routerReducer';



const rootReducer = {
    counter,
    routing: routerReducer
};

// export type RootReducer = {
//     counter: CounterImmutableState
// }

export default combineReducers(rootReducer);