import BButton from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { getComponentId } from '../../utility/Util';

/**
 * Button component
 * @param {*} param0 
 * @returns 
 */
 const Button = ({id, form, type, label, disabled, children, onClick}) => {
    const buttonLabel = children ? children : label;
    const idValue = getComponentId(id);

    return (
        // <button type={type} form={form} id={idValue} className={`btn btn-primary ${className}`} onClick={onClick} disabled={disabled}>{buttonLabel}</button>
        <BButton variant="dark" type={type} form={form} id={idValue} onClick={onClick} disabled={disabled}>{buttonLabel}</BButton>
    )
}
Button.propTypes = {
    id: PropTypes.string,
    form: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func
}
Button.defaultProps = {
    type: 'button',
    label: 'Button',
    disabled: false
}

export default Button;
