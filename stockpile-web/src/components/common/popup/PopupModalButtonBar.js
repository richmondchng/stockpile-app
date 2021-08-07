import PropTypes from 'prop-types';
import Button from '../form/Button';

/**
 * Modal footer containing modal control buttons.
 * Include close button by default
 * @param {*} param0 
 * @returns PopupModalButtonBar
 */
const PopupModalButtonBar = ({children, closeAction}) => {
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeAction}>Close</button>
            {children}
        </div>
    )
}

PopupModalButtonBar.propTypes = {
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

export default PopupModalButtonBar
