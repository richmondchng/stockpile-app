import _Toast from 'react-bootstrap/Toast';
import _ToastContainer from 'react-bootstrap/ToastContainer';
import PropTypes from 'prop-types';

const Toast = ({idx, title, variant, message, show}) => {
    return (
        <_Toast className="d-inline-block m-1" bg={variant} key={idx} show={show}>
            <_Toast.Header>
            {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
                <strong className="me-auto">{title}</strong>
                <small>11 mins ago</small>
            </_Toast.Header>
            <_Toast.Body className={variant === 'dark' && 'text-white'}>
                {message}
            </_Toast.Body>
        </_Toast>
    )
}

const ToastContainer = ({position, children}) => {
    return (
        <ToastContainer className="p-3" position={position}>{children}</ToastContainer>
    )
}

ToastContainer.defaultProps = {
    position: 'bottom-end'
}

export { 
    ToastContainer,
    Toast
}
