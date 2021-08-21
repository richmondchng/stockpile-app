import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';
import NavBarMenuItem from './NavBarMenuItem';

/**
 * Item in the nav bar that contains sub-items
 * @param {*} param0 
 * @returns 
 */
const NavBarMenu = ({id, label, children}) => {
    return (
        <NavDropdown title={label} id={id}>
            {children}
        </NavDropdown>
    )
}

NavBarMenu.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.shape({
            type: PropTypes.oneOf([NavBarMenuItem])
        }),
        PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.oneOf([NavBarMenuItem])
            })
        )
    ]),
}

export default NavBarMenu
