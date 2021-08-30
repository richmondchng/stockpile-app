import PropTypes from 'prop-types';
import _Alert from 'react-bootstrap/Alert';

/**
 * Standard alert.
 * @param {*} param0 
 * @returns 
 */
const Alert = ({show, variant, onClose, title, children}) => {
    let heading = title ? <_Alert.Heading>{title}</_Alert.Heading> : '';
    return (
        <_Alert variant={variant} show={show} onClose={onClose} dismissible>
            {heading}
            {children}
        </_Alert>
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
