import PropTypes from 'prop-types';

/**
 * Form text input field.
 * @param {*} param0 
 * @returns 
 */
const TextInput = ({id, label, placeholder, value, changeAction}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="text" className="form-control form-control-sm" id={id} value={value} placeholder={placeholder} onChange={changeAction} />
        </div>
    )
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    changeAction: PropTypes.func
}

export default TextInput
