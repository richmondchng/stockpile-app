import PropTypes from 'prop-types';
import { getComponentId } from '../../utility/Util';
import _Form from 'react-bootstrap/Form';

/**
 * Basic form
 * @param {*} param0 
 * @returns 
 */
const Form = ({id, children, onSubmit}) => {

    const idValue = getComponentId(id);

    return (
        // <form id={idValue} onSubmit={submitAction}>
        //     {children}
        // </form>
        <_Form id={idValue} onSubmit={onSubmit} size="sm">{children}</_Form>
    )
}

Form.propTypes = {
    children: PropTypes.node,
    onSubmit: PropTypes.func,
    id: PropTypes.string
}

export default Form
