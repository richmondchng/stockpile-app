import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';
import NavBarMenu from './NavBarMenu';

/**
 * Page navigation bar.
 */
const NavBar = ({brand, home, children}) => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href={home}>{brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {children}
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

NavBar.propTypes = {
    brand: PropTypes.node,
    home: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.shape({
            type: PropTypes.oneOf([NavBarItem])
        }),
        PropTypes.shape({
            type: PropTypes.oneOf([NavBarMenu])
        }),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.shape({
                    type: PropTypes.oneOf([NavBarItem])
                }),
                PropTypes.shape({
                    type: PropTypes.oneOf([NavBarMenu])
                })
            ])
        )
    ])
}
NavBar.defaultProps = {
    brand: "Hello World",
    home: "/"
}

export default NavBar
