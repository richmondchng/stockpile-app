import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

/**
 * Form text input field.
 * @param {*} param0 
 * @returns 
 */
 const TextInput = ({id, label, placeholder, value, changeAction, readOnly}) => {
    return (
        // <div className="mb-3">
        //     <label htmlFor={id} className="form-label">{label}</label>
        //     <input type="text" className="form-control form-control-sm" id={id} value={value} placeholder={placeholder} onChange={changeAction} readOnly={readOnly} />
        // </div>
        <Form.Group className="mb-3" size="sm" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" value={value} placeholder={placeholder} onChange={changeAction} readOnly={readOnly} />
        </Form.Group>
    )
}
TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    changeAction: PropTypes.func
}
TextInput.defaultProps = {
    label: "Text",
    readOnly: false
}

export default TextInput
