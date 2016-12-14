import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

// reducers
import rootReducer from "./reducers";

// middlewares 中间件，需要注意顺序
const middlewares = [thunk];

const enhancer = compose(composeWithDevTools(applyMiddleware(...middlewares)));

export default createStore(rootReducer, enhancer);