import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { browserHistory } from "react-router";

import store from "./store";
import routes from './routes';


if (process.env.NODE_ENV !== "production") {
    const {whyDidYouUpdate} = require("why-did-you-update")
    whyDidYouUpdate(React, { include: /^pure/ })
}

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>
    , document.getElementById("root"));