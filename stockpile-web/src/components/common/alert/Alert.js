import PropTypes from 'prop-types';

/**
 * Standard alert.
 * @param {*} param0 
 * @returns 
 */
const Alert = ({show, level, children}) => {
    return (
        <span>{show ? (<div className={`alert alert-${level}`} role="alert">{children}</div>) : null}</span>
    )
}

Alert.propTypes = {
    level: PropTypes.string.isRequired,
    children: PropTypes.node,
    show: PropTypes.bool
}

Alert.defaultProps = {
    level: "info",
    show: false
}

export default Alert
