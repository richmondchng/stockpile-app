import PropTypes from 'prop-types';
import PopupModalBody from './PopupModalBody';
import PopupModalButtonBar from './PopupModalButtonBar';

const PopupModal = ({id, title, children, onClose = () => {}}) => {
    
    //const onCloseAction = close ? {onClick : close} : {};

    return (
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}_label`} aria-hidden="true">          
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}_label`}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

PopupModal.propTypes = {
    //children: PropTypes.node.isRequired
    children: PropTypes.oneOfType([
        // PropTypes.objectOf(PopupModalBody).isRequired,

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
    ]).isRequired

    // children: function(props, propName, componentName) {
    //     if (!/matchme/.test(props[propName])) {
    //       return new Error(
    //         'Invalid prop `' + props[propName] + '` supplied to' +
    //         ' `' + componentName + '`. Validation failed.'
    //       );
    //     }
    //   }
}

export default PopupModal
