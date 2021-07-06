import { Link } from 'react-router-dom';

/**
 * Single navigation item.
 * id = menu Id
 * label = Menu item label
 * link = Link to page, or # by default
 * active = If it is the current active page, false by default
 */
const NavBarItem = ({id, label, link = "#", active = false, children}) => {
    const listItemClass = children ? 'nav-item dropdown' : 'nav-time';

    let menuLink
    if(!children) {
        // single level menu item
        const activeClass = active ? 'nav-link active' : 'nav-link ';
        const ariaCurrent = active ? {"aria-current":"page"} : {};
        menuLink = <Link id={id} className={activeClass} {... ariaCurrent} to={link}>{label}</Link>;
    } else {
        // has sub-level menu item
        menuLink = <Link id={id} to={link} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{label}</Link>
    }

    let menuChildList
    if(children) {
        // add list to build child nav item
        menuChildList = <ul className="dropdown-menu bg-dark" aria-labelledby={id}>{children}</ul>;
    }

    return (
        <li className={listItemClass}>
            {menuLink}
            {menuChildList}
        </li>
    )
}

export default NavBarItem

