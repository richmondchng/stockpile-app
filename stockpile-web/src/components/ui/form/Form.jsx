import PropTypes from 'prop-types';
import { getComponentId } from '../../utility/Util';
import BForm from 'react-bootstrap/Form';

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
        <BForm id={idValue} onSubmit={onSubmit} size="sm">{children}</BForm>
    )
}

Form.propTypes = {
    children: PropTypes.node,
    onSubmit: PropTypes.func,
    id: PropTypes.string
}

export default Form
