import PropTypes from 'prop-types';

let id = 0;

/**
 * Show notification action.
 * @param {*} message message
 * @param {*} variant success info, warning, danger
 * @param {*} title default to Info
 * @param {*} delay default to 3000ms
 * @returns function
 */
export const showAlert = (message, variant, title, delay) => {
    return notification('show-alert', title, variant, message, true, delay);
}

showAlert.PropTypes = {
    variant: PropTypes.oneOf([
        'success', 'info', 'warning', 'danger'
    ]),
    message: PropTypes.string.isRequired,
    title: PropTypes.string,
    delay: PropTypes.number
}

showAlert.defaultProps = {
    variant: 'success',
    title: 'Info'
}

const notification = (payloadType, title, variant, message, show, delay) => {
    return {
        type: payloadType,
        payload: {
            id: `alert_${++id}`,
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
 export const closeAlert = (idx) => {
    return {
        type: 'close-alert',
        payload: idx
    }
}

