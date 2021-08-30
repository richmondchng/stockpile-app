import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

/**
 * Single navigation item.
 * id = menu Id
 * children = Menu item label
 * link = Link to page, or # by default
 * active = If it is the current active page, false by default
 */
const NavBarItem = ({idx, link, active = false, children}) => {
    return (
        <Nav.Item>
            <Nav.Link as={Link} to={link} eventKey={idx} active={active}>{children}</Nav.Link>
        </Nav.Item>
    )
}

NavBarItem.propTypes = {
    idx: PropTypes.string.isRequired,
    link: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.node.isRequired
}
NavBarItem.defaultProps = {
    link: "#",
    active: false
}
export default NavBarItem

