import Alert from './Alert'
import PropTypes from 'prop-types';

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

InfoAlert.propTypes = {
    children: PropTypes.node,
    show: PropTypes.bool
}

export default InfoAlert
