// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './Reducers';

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export default store;

import { createStore, applyMiddleware ,compose} from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./Epics/root-epic";
import { rootReducer } from "./Reducers/index";
// create an instance of the redux-observable middleware
const epicMiddleware = createEpicMiddleware();
// next we call our epicMiddleware with our rootEpic
// We'll see what epics are on the next section
const composeEnhancers = process.env.NODE_ENV === 'development' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);
export default store;
