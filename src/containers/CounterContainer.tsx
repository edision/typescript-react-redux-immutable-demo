import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// component
import Counter from "COMPONENTS/Counter";
// actions
import CounterActions from "ACTIONS/CounterActions";

const mapStateToProps = state => (state.get("counter").toObject());
const mapDispatchToProps = (dispatch, state) => (bindActionCreators(CounterActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
