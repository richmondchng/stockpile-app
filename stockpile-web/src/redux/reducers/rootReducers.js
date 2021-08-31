import { combineReducers } from 'redux';
import toastReducer from './toastReducer';

const rootReducers = combineReducers({
    toasts: toastReducer
});

export default rootReducers;