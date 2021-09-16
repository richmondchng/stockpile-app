import { useDispatch } from 'react-redux';
import { showAlert, closeAlert } from '../../redux/actions/alertActions';

/**
 * Show info alert
 * @returns function to show info alert
 */
export function useInfoAlert() {
    const dispatch = useDispatch();
    return (message) => {
        dispatch(showAlert(message, 'success', 'Info'))
    };
}

/**
 * Show warning alert
 * @returns function to show warning alert
 */
export function useWarningAlert() {
    const dispatch = useDispatch();
    return (message) => {
        dispatch(showAlert(message, 'warning', 'Warning'))
    };
}

/**
 * Show error info
 * @returns function to show error info
 */
export function useErrorInfo() {
    const dispatch = useDispatch();
    return (message) => {
        dispatch(showAlert(message, 'danger', 'Error'))
    };
}

/**
 * Close alert hook.
 * @returns function to close alert with id.
 */
export function useCloseAlert() {
    const dispatch = useDispatch();
    return () => {
        dispatch(closeAlert());
    };
}
