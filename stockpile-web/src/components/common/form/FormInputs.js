import PropTypes from 'prop-types';
import { getComponentId } from '../Util';

/**
 * Form text input field.
 * @param {*} param0 
 * @returns 
 */
const TextInput = ({id, label, placeholder, value, changeAction, readOnly}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="text" className="form-control form-control-sm" id={id} value={value} placeholder={placeholder} onChange={changeAction} readOnly={readOnly} />
        </div>
    )
}
TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    changeAction: PropTypes.func
}
TextInput.defaultProps = {
    readOnly: false
}

/**
 * Button component
 * @param {*} param0 
 * @returns 
 */
 const Button = ({id, form, type, className, label = 'Button', disabled, children, clickAction}) => {
    const buttonLabel = children ? children : label;
    const idValue = getComponentId(id);

    return (
        <div>
            <button type={type} form={form} id={idValue} className={`btn btn-primary ${className}`} onClick={clickAction} disabled={disabled}>{buttonLabel}</button>
        </div>
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
