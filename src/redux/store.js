import { applyMiddleware, combineReducers,createStore } from "redux";
import counterReducer from './count/reducer'
import  userReducer from "./user/reducer";
import createSagaMiddleware from "@redux-saga/core"
import { watcherSaga } from "./sagas/rootSaga";

export const mainReducer = combineReducers({
    counter : counterReducer,
    user : userReducer
})
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = createStore(mainReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

export default store;