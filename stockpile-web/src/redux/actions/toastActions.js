import PropTypes from 'prop-types';

let id = 0;

/**
 * Show toast notification action.
 * @param {*} message message
 * @param {*} variant info, warning, danger
 * @param {*} title default to Info
 * @param {*} delay default to 3000ms
 * @returns function
 */
export const showToastNotification = (message, variant, title, delay) => {
    return notification('show-toast-notification', title, variant, message, true, delay);
}

showToastNotification.PropTypes = {
    variant: PropTypes.oneOf([
        'info', 'warning', 'danger'
    ]),
    message: PropTypes.string.isRequired,
    title: PropTypes.string,
    delay: PropTypes.number
}

showToastNotification.defaultProps = {
    variant: 'info',
    title: 'Info',
    delay: 3000
}

const notification = (payloadType, title, variant, message, show, delay) => {
    return {
        type: payloadType,
        payload: {
            id: `toast_${++id}`,
            title: title,
            variant: variant,
            message: message,
            show: show,
            delay: delay
        }
    }
}

/**
 * Close toast notification action
 * @param {*} idx toast id
 * @returns function
 */
export const closeToastNotification = (idx) => {
    return {
        type: 'close-toast-notification',
        payload: idx
    }
}

