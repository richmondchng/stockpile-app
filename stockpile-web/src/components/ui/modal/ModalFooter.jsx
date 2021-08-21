import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

/**
 * Modal footer containing modal control buttons.
 * Include close button by default
 * @param {*} param0 
 * @returns ModalButtonBar
 */
const ModalFooter = ({children}) => {
    return (
        <Modal.Footer>
            {children}
        </Modal.Footer>
    )
}
ModalFooter.propTypes = {
    children: PropTypes.node
}

export default ModalFooter
