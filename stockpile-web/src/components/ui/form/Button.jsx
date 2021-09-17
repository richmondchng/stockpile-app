import BootstrapButton from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { getComponentId } from '../../util/common-utils';

/**
 * Button component
 * @param {*} param0 
 * @returns 
 */
 const Button = ({idx, form, type, label, variant, disabled, children, onClick}) => {
    const buttonLabel = children ? children : label;
    const idValue = getComponentId(idx);

    return (
        <BootstrapButton variant={variant} type={type} form={form} id={idValue} onClick={onClick} disabled={disabled}>{buttonLabel}</BootstrapButton>
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
