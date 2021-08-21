import PropTypes from 'prop-types';
import { getComponentId } from '../../utility/Util';
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






/**
 * Button component
 * @param {*} param0 
 * @returns 
 */
 const Button = ({id, form, type, className, label = 'Button', disabled, children, onClick}) => {
    const buttonLabel = children ? children : label;
    const idValue = getComponentId(id);

    return (
        <button type={type} form={form} id={idValue} className={`btn btn-primary ${className}`} onClick={onClick} disabled={disabled}>{buttonLabel}</button>
    )
}
Button.propTypes = {
    children: PropTypes.node,
    clickAction: PropTypes.func,
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
}
Button.defaultProps = {
    type: 'button',
    disabled: false
}

export {
    TextInput,
    Button
}
