import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

/**
 * Form text input field.
 * @param {*} param0 
 * @returns 
 */
 const TextInput = ({idx, label, placeholder, value, changeAction, readOnly}) => {
    return (
        <Form.Group className="mb-3" size="sm" controlId={idx}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" value={value} placeholder={placeholder} onChange={changeAction} readOnly={readOnly} />
        </Form.Group>
    )
}
TextInput.propTypes = {
    idx: PropTypes.string.isRequired,
    label: PropTypes.string,
    changeAction: PropTypes.func
}
TextInput.defaultProps = {
    label: "Text",
    readOnly: false
}

export default TextInput
