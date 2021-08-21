import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

/**
 * Drop down input. Populate with data in array of {key: "key", value : "value"}
 * @param {*} param0 
 * @returns 
 */
 const DropdownInput = ({idx, label, placeholder, data, onChange, children}) => {
    let placeholderOpt = placeholder ? <option>{placeholder}</option> : '';
    let options = children ? children : 
        (data && data.length && data.map((opt) => {
            return <option key={opt.key} value={opt.key}>{opt.value}</option>
        }));
    return (
        <Form.Group className="mb-3" controlId={idx}>
            <Form.Label>{label}</Form.Label>
            <Form.Select size="sm" onChange={onChange}>
                {placeholderOpt}
                {options}
            </Form.Select>
        </Form.Group>
    )
}
DropdownInput.propTypes = {
    idx: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    data: PropTypes.array,
    selectedValue: PropTypes.string,
    children: PropTypes.node
}
DropdownInput.defaultProps = {
    label: "Select",
    selectedValue: ""
}

export default DropdownInput;