import { combineReducers } from 'redux';
import toastReducer from './toastReducer';
import alertReducer from './alertReducer';

const rootReducers = combineReducers({
    toasts: toastReducer,
    alert: alertReducer
});

export default rootReducers;