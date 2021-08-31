import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/rootReducers';

export default function configureStore(preloadedState) {
    // const middlewares = [loggerMiddleware, thunkMiddleware]
    // const middlewareEnhancer = applyMiddleware(...middlewares)

    // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    // const composedEnhancers = compose(...enhancers)

    // const store = createStore(rootReducer, preloadedState, composedEnhancers);
    const store = createStore(rootReducers, preloadedState, applyMiddleware(thunk));
    return store;
}