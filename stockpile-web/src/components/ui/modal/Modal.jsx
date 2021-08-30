import PropTypes from 'prop-types';
import _Modal from 'react-bootstrap/Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

const Modal = ({title, show, children, closeAction}) => {
    return (
        <_Modal show={show} onHide={closeAction} backdrop="static" keyboard={false}>
            <_Modal.Header closeButton>
                <_Modal.Title>{title}</_Modal.Title>
            </_Modal.Header>
            {children}
        </_Modal>
    )
}
Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.shape({
            type: PropTypes.oneOf([ModalBody])
        }),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.shape({
                    type: PropTypes.oneOf([ModalBody])
                }), 
                PropTypes.shape({
                    type: PropTypes.oneOf([ModalFooter])
                })
            ])
        )
    ]).isRequired,
    closeAction: PropTypes.func,
    title: PropTypes.string.isRequired
}
Modal.defaultProps = {
    title: 'Title'
}

export default Modal
