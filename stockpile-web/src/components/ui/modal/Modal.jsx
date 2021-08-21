import BModal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Modal = ({title, show, children, closeAction}) => {
    return (
        <BModal show={show} onHide={closeAction} backdrop="static" keyboard={false}>
            <BModal.Header closeButton>
                <BModal.Title>{title}</BModal.Title>
            </BModal.Header>
            {children}
            {/* <BModal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
            </BModal.Body>
            <BModal.Footer>
            <Button variant="secondary" onClick={closeAction}>
                Close
            </Button>
            <Button variant="primary">Understood</Button>
            </BModal.Footer> */}
        </BModal>
    )
}
Modal.propTypes = {
    // children: PropTypes.oneOfType([
    //     PropTypes.shape({
    //         type: PropTypes.oneOf([ModalBody])
    //     }),
    //     PropTypes.arrayOf(
    //         PropTypes.oneOfType([
    //             PropTypes.shape({
    //                 type: PropTypes.oneOf([ModalBody])
    //             }), 
    //             PropTypes.shape({
    //                 type: PropTypes.oneOf([ModalButtonBar])
    //             })
    //         ])
    //     )
    // ]).isRequired,
    closeAction: PropTypes.func,
    title: PropTypes.string.isRequired
}
Modal.defaultProps = {
    title: 'Title'
}

export default Modal
