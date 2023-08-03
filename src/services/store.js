import { /*compose,*/ createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer.js';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

/*const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();    

const store = createStore(rootReducer, enhancer);*/

//const store = createStore(rootReducer); */