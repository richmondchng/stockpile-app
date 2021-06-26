import PropTypes from 'prop-types'

const AlertMessage = ({message, messageStyle = 'info', show = false}) => {
    return (
        <>
        {show ? 
        <div className={`alert alert-${messageStyle} alert-dismissible fade show`} role="alert">
            {message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        : ''}
        </>
    )
}

AlertMessage.propTypes = {
    message: PropTypes.string.isRequired,
    messageStyle: PropTypes.string,
    show: PropTypes.bool
}

export default AlertMessage
