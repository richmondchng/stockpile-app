import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

/**
 * Form text input field.
 * @param {*} param0 
 * @returns 
 */
 const TextInput = ({idx, label, placeholder, value, onChange, readOnly}) => {
    return (
        <Form.Group className="mb-3" size="sm" controlId={idx}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" value={value} placeholder={placeholder} onChange={onChange} readOnly={readOnly} />
        </Form.Group>
    )
}
TextInput.propTypes = {
    idx: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func
}
TextInput.defaultProps = {
    label: "Text",
    readOnly: false
}

export default TextInput
