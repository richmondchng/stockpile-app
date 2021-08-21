import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

/**
 * Modal footer containing modal control buttons.
 * Include close button by default
 * @param {*} param0 
 * @returns ModalButtonBar
 */
const ModalFooter = ({children, closeAction}) => {
    return (
        // <div className="modal-footer">
        //     <button id={`${modalId}-cancel-btn`} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeAction}>Close</button>
        //     {children}
        // </div>
        <Modal.Footer>
            {children}
        </Modal.Footer>
    )
}
ModalFooter.propTypes = {
    children: PropTypes.node,
    closeAction: PropTypes.func
}

export default ModalFooter
