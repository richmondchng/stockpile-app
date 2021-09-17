import PropTypes from 'prop-types';
import BootstrapModal from 'react-bootstrap/Modal';
import BootstrapModalBody from './ModalBody';
import BootstrapModalFooter from './ModalFooter';

const Modal = ({title, show, children, closeAction}) => {
    return (
        <BootstrapModal show={show} onHide={closeAction} backdrop="static" keyboard={false}>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>{title}</BootstrapModal.Title>
            </BootstrapModal.Header>
            {children}
        </BootstrapModal>
    )
}
Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.shape({
            type: PropTypes.oneOf([BootstrapModalBody])
        }),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.shape({
                    type: PropTypes.oneOf([BootstrapModalBody])
                }), 
                PropTypes.shape({
                    type: PropTypes.oneOf([BootstrapModalFooter])
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
