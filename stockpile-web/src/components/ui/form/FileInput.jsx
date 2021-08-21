import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

/**
 * Drop down input. Populate with data in array of {key: "key", value : "value"}
 * @param {*} param0 
 * @returns 
 */
 const FileInput = ({idx, label, placeholder, onChange}) => {
    return (
        <Form.Group controlId={idx} className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control type="file" size="sm" placeholder={placeholder} onChange={onChange} />
        </Form.Group>
    )
}
FileInput.propTypes = {
    idx: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func
}
FileInput.defaultProps = {
    label: "File"
}

export default FileInput
