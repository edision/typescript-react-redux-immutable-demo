import * as React from "react";
import { Route, IndexRoute } from "react-router";

// components
import App from "COMPONENTS/App";
import NotFound from "COMPONENTS/NotFound";
// Containers
import CounterContainer from "CONTAINERS/CounterContainer";

const routes = (
    <Route>
        <Route path="/" component={App}>
            <IndexRoute component={CounterContainer}></IndexRoute>
            <Route path="/counter" component={CounterContainer}></Route>
        </Route>
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;