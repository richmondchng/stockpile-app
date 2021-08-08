import Alert from './Alert'
import PropTypes from 'prop-types';

/**
 * Error alert type.
 * @param {*} param0 
 * @returns 
 */
const ErrorAlert = ({show, children}) => {
    return (
        <Alert level="danger" show={show}>{children}</Alert>
    )
}

ErrorAlert.propTypes = {
    children: PropTypes.node,
    show: PropTypes.bool
}

export default ErrorAlert
