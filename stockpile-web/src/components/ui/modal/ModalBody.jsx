import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

/**
 * Modal dialog body.
 * @param {*} param0 
 * @returns ModalBody
 */
const ModalBody = ({children}) => {
    return (
        <Modal.Body>{children}</Modal.Body>
    )
}
ModalBody.propTypes = {
    children: PropTypes.node
}

export default ModalBody
