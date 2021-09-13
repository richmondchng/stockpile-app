import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import PropTypes from 'prop-types';
import { useCloseToast } from '../../util/toast-notification';
// import Fade from 'react-bootstrap/Fade';

/**
 * Toasts notifications.
 * @param {*} param0 
 * @returns 
 */
const Toasts = ({position, toasts}) => {
    const closeToast = useCloseToast();

    return (
        <ToastContainer className="p-3" position={position}>
            {toasts.map((toast, index) => {
                return (
                    <Toast className="d-inline-block m-1" bg={toast.variant} key={index} show={toast.show}
                        onClose={() => closeToast(toast.id)}>
                        {/* delay={3000} autohide animation transition={Fade}> */}
                        <Toast.Header>
                            <strong className="me-auto">{toast.title}</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body className={toast.variant === 'dark' && 'text-white'}>
                            {toast.message}
                        </Toast.Body>
                    </Toast>
                )
            })}
        </ToastContainer>
    )
}

Toasts.propTypes = {
    position: PropTypes.string.isRequired,
    toasts: PropTypes.array
}

Toasts.defaultProps = {
    position: 'bottom-end'
}

export default Toasts

