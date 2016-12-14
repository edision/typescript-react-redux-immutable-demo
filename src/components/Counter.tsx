import * as React from "react";

export interface CounterProps {
    amount: number;
    step: number;
    increment: (amount?: number) => void;
    decrement: (amount?: number) => void;
    setStep: (step?: number) => void;
}

export default class Counter extends React.PureComponent<CounterProps, undefined> {
    constructor(props) {
        super(props);
    }
    private renderCount() {
        let elms = [];
        for(let i = 0; i < this.props.amount; i++) {
            elms.push(<li key={i}>{i}</li>);
        }
        return elms;
    }
    render() {
        const {amount, step, increment, decrement, setStep} = this.props;
        return (
            <div style={{ margin: "10px" }}>
                <button type="button" className="btn btn-success" onClick={() => increment()}>+</button>
                <span style={{ padding: "0 5px" }}>{amount}</span>
                <button type="button" className="btn btn-danger" onClick={() => decrement()}>-</button>
                <span>step:</span>
                <input type="number" value={step.toString()} onChange={event => {
                    setStep(parseInt((event.target as HTMLInputElement).value, 10));
                }}/>
                <ul>
                {this.renderCount()}
                </ul>
            </div>
        );
    }
}