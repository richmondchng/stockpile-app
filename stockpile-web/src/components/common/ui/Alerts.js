import PropTypes from 'prop-types';

/**
 * Standard alert.
 * @param {*} param0 
 * @returns 
 */
const Alert = ({show, level, children}) => {
    return (
        <span>{show ? (
            <div className={`alert alert-${level} alert-dismissible fade show`} role="alert">
                {children}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            ) : null}</span>
    )
}

/**
 * Info alert type.
 * @param {*} param0 
 * @returns 
 */
 const InfoAlert = ({show, children}) => {
    return (
        <Alert level="info" show={show}>{children}</Alert>
    )
}
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

// prop types
Alert.propTypes = {
    level: PropTypes.string.isRequired,
    children: PropTypes.node,
    show: PropTypes.bool
}
InfoAlert.propTypes = {
    children: PropTypes.node,
    show: PropTypes.bool
}
ErrorAlert.propTypes = {
    children: PropTypes.node,
    show: PropTypes.bool
}
// default props
Alert.defaultProps = {
    level: "info",
    show: false
}

export {
    InfoAlert,
    ErrorAlert
}