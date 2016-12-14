import * as Redux from "redux";
import { createReducer } from "redux-immutablejs";
import * as Immutable from "immutable";
// actions
import { CounterImmutableState, ACTION_HANDLERS } from "../actions/CounterActions";

// const reducer: Redux.Reducer<number> = createReducer(Immutable.fromJS({ count: 0, step: 0 }), ACTION_HANDLERS);
// const createReducer = function (initialState: ICounterReduxState, handles: any) {
//     return function reducer(state: ICounterReduxState = initialState, action: Redux.Action) {
//         const handler = handles[action.type];
//         return handler ? handler(state, action) : state;
//     }
// }

export default createReducer(new CounterImmutableState({ amount: 0, step: 1 }), ACTION_HANDLERS);
