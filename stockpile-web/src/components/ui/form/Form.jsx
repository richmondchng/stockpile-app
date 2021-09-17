import PropTypes from 'prop-types';
import { getComponentId } from '../../util/common-utils';
import BootstrapForm from 'react-bootstrap/Form';

/**
 * Basic form
 * @param {*} param0 
 * @returns 
 */
const Form = ({idx, children, onSubmit}) => {
    const idValue = getComponentId(idx);
    return (
        <BootstrapForm id={idValue} onSubmit={onSubmit} size="sm">{children}</BootstrapForm>
    )
}

Form.propTypes = {
    children: PropTypes.node,
    onSubmit: PropTypes.func,
    idx: PropTypes.string
}

export default Form
