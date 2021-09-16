import { useDispatch } from 'react-redux';
import { showToastNotification, closeToastNotification } from '../../redux/actions/toastActions';

/**
 * Show info toast
 * @returns function to show info toast
 */
export function useInfoToast() {
    const dispatch = useDispatch();
    return (message) => {
        dispatch(showToastNotification(message, 'success', 'Info'))
    };
}

/**
 * Show warning toast
 * @returns function to show warning toast
 */
export function useWarningToast() {
    const dispatch = useDispatch();
    return (message) => {
        dispatch(showToastNotification(message, 'warning', 'Warning'))
    };
}

/**
 * Show error toast
 * @returns function to show error toast
 */
export function useErrorToast() {
    const dispatch = useDispatch();
    return (message) => {
        dispatch(showToastNotification(message, 'danger', 'Error'))
    };
}

/**
 * Close toast hook.
 * @returns function to close toast with id.
 */
export function useCloseToast() {
    const dispatch = useDispatch();
    return (id) => {
        dispatch(closeToastNotification(id));
    };
}
