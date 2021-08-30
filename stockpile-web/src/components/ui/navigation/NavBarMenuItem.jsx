import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';

/**
 * Navigation sub menu item.
 * @param {*} param0 
 * @returns 
 */
const NavBarMenuItem = ({idx, link, children}) => {
    return (
        <NavDropdown.Item as={Link} to={link} eventKey={idx}>{children}</NavDropdown.Item>
    )
}

NavBarMenuItem.propTypes = {
    idx: PropTypes.string.isRequired,
    link: PropTypes.string,
    children: PropTypes.node.isRequired
}
NavBarMenuItem.defaultProps = {
    link: "#"
}

export default NavBarMenuItem
