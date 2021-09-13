import PropTypes from 'prop-types';

let id = 0;

export const showToastNotification = (message, variant, title) => {
    return notification('show-toast-notification', title, variant, message, true);
}

showToastNotification.PropTypes = {
    variant: PropTypes.oneOf([
        'info', 'warning', 'danger'
    ]),
    message: PropTypes.string.isRequired,
    title: PropTypes.string
}

showToastNotification.defaultProps = {
    variant: 'info',
    title: 'Info'
}

const notification = (payloadType, title, variant, message, show) => {
    return {
        type: payloadType,
        payload: {
            id: `toast_${++id}`,
            title: title,
            variant: variant,
            message: message,
            show: show
        }
    }
}

export const closeToastNotification = (idx) => {
    return {
        type: 'close-toast-notification',
        payload: idx
    }
}

