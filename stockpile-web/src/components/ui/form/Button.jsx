import _Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { getComponentId } from '../../utility/Util';

/**
 * Button component
 * @param {*} param0 
 * @returns 
 */
 const Button = ({idx, form, type, label, variant, disabled, children, onClick}) => {
    const buttonLabel = children ? children : label;
    const idValue = getComponentId(idx);

    return (
        <_Button variant={variant} type={type} form={form} id={idValue} onClick={onClick} disabled={disabled}>{buttonLabel}</_Button>
    )
}
Button.propTypes = {
    idx: PropTypes.string,
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
    variant: 'dark',
    disabled: false
}

export default Button;
