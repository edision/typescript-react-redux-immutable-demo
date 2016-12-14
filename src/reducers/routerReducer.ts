import * as Immutable from "immutable";
import { createReducer } from "redux-immutablejs";

const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
const initialState = Immutable.fromJS({locationBeforeTransitions: null})

const ACTION_HANDLES = {
    [LOCATION_CHANGE]: (state: Immutable.Map<string, any>, action: any) => state.get("routing").set("locationBeforeTransitions", action.playload)
}

export default createReducer(initialState, ACTION_HANDLES);