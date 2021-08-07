import PropTypes from 'prop-types';
import { getComponentId } from '../Util';

/**
 * Basic form
 * @param {*} param0 
 * @returns 
 */
const Form = ({id, children, submitAction}) => {

    const idValue = getComponentId(id);

    return (
        <form id={idValue} onSubmit={submitAction}>
            {children}
        </form>
    )
}

Form.propTypes = {
    children: PropTypes.node,
    submitAction: PropTypes.func,
    id: PropTypes.string
}

export default Form
