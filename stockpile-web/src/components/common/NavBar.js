import NavBarItem from './NavBarItem';

/**
 * Page navigation bar.
 */
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Stockpile</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav">
                        <NavBarItem label="Home" link="/" active="true"></NavBarItem>
                        <NavBarItem label="Upload" link="/upload"></NavBarItem>
                        <NavBarItem label="About" link="/about"></NavBarItem>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
