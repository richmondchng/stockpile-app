import PropTypes from 'prop-types';
import PopupModalBody from './PopupModalBody';
import PopupModalButtonBar from './PopupModalButtonBar';

/**
 * Popup dialog modal box.
 * @param {*} param0 
 * @returns 
 */
const PopupModal = ({id, title = 'Title', children, closeAction = () => {}}) => {

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

PopupModal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.shape({
            type: PropTypes.oneOf([PopupModalBody])
        }),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.shape({
                    type: PropTypes.oneOf([PopupModalBody])
                }), 
                PropTypes.shape({
                    type: PropTypes.oneOf([PopupModalButtonBar])
                })
            ])
        )
    ]).isRequired,
    closeAction: PropTypes.func,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default PopupModal
