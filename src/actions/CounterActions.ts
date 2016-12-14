import * as Redux from "redux";
import * as Immutable from "immutable";

export const INCREMENT: string = "Counter/INCREMENT";
export const DECREMENT: string = "Counter/DECREMENT";
export const SET_STEP: string = "Counter/SET_STEP";

export interface CounterAmountAction extends Redux.Action {
    amount: number;
}

export interface CounterStepAction extends Redux.Action {
    step: number;
}

interface CounterState {
    amount: number;
    step: number;
}

const CounterRecord = Immutable.Record({
    amount: 0,
    step: 0
});

export class CounterImmutableState extends CounterRecord {
    amount: number;
    step: number;

    constructor(props: CounterState){
        super(props);
    }

    public setAmount(value: number = 0) {
        return this.set("amount", value);
    }

    public setStep(value: number = 0) {
        return this.set("step", value);
    }
}



export const increment: Redux.ActionCreator<CounterAmountAction> = (amount?: number) => ({ type: INCREMENT, amount });
export const decrement: Redux.ActionCreator<CounterAmountAction> = (amount?: number) => ({ type: DECREMENT, amount });
export const setStep: Redux.ActionCreator<CounterStepAction> = (step: number) => ({ type: SET_STEP, step });

export const ACTION_HANDLERS = {
    [INCREMENT]: (state: CounterImmutableState, action: CounterAmountAction) => {
        if (action.amount) return state.setAmount(state.amount + action.amount);
        else return state.setAmount(state.amount + state.step);

        // 非immutable
        // if (action.amount) return { ...state, count: state.count + action.amount };
        // else return { ...state, count: state.count + state.step };
    },
    [DECREMENT]: (state: CounterImmutableState, action: CounterAmountAction) => {
        if (action.amount) return state.setAmount(state.amount - action.amount);
        else return state.setAmount(state.amount - state.step);

        // if (action.amount) return { ...state, count: state.count - action.amount };
        // else return { ...state, count: state.count - state.step };
    },
    [SET_STEP]: (state: CounterImmutableState, action: CounterStepAction) => (state.setStep(action.step))
};

const actions: Redux.ActionCreatorsMapObject = {
    increment,
    decrement,
    setStep
};

export default actions;