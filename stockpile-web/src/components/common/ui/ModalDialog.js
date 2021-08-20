import PropTypes from 'prop-types';
import { Button } from '../form/FormInputs';

/**
 * Modal dialog body.
 * @param {*} param0 
 * @returns ModalBody
 */
const ModalBody = ({children}) => {
    return (
        <div className="modal-body">
            {children}
        </div>
    )
}
ModalBody.propTypes = {
    children: PropTypes.node
}

/**
 * Modal footer containing modal control buttons.
 * Include close button by default
 * @param {*} param0 
 * @returns ModalButtonBar
 */
const ModalButtonBar = ({modalId, children, closeAction}) => {
    return (
        <div className="modal-footer">
            <button id={`${modalId}-cancel-btn`} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeAction}>Close</button>
            {children}
        </div>
    )
}
ModalButtonBar.propTypes = {
    modalId: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.shape({
            type: PropTypes.oneOf([Button])
        }),
        PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.oneOf([Button])
            })
        )
    ])
}

/**
 * Popup dialog modal box.
 * @param {*} param0 
 * @returns 
 */
const Modal = ({id, title = 'Title', children, closeAction}) => {
    return (
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}_label`} aria-hidden="true">          
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}_label`}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeAction}></button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
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
                    type: PropTypes.oneOf([ModalButtonBar])
                })
            ])
        )
    ]).isRequired,
    closeAction: PropTypes.func,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
Modal.defaultProps = {
    title: 'Title'
}

export { 
    Modal,
    ModalBody,
    ModalButtonBar
}