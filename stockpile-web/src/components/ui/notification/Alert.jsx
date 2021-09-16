import PropTypes from 'prop-types';
import BootstrapAlert from 'react-bootstrap/Alert';

/**
 * Standard alert.
 * @param {*} param0 
 * @returns 
 */
const Alert = ({show, variant, onClose, title, children}) => {
    let heading = title ? <BootstrapAlert.Heading>{title}</BootstrapAlert.Heading> : '';
    return (
        <BootstrapAlert variant={variant} show={show} onClose={onClose} dismissible>
            {heading}
            {children}
        </BootstrapAlert>
    )
}

// prop types
Alert.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.node,
    show: PropTypes.bool,
    title: PropTypes.string
}
// default props
Alert.defaultProps = {
    variant: "info",
    show: false
}

export default Alert
