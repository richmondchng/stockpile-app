
/**
 * Single navigation item.
 * label = Menu item label
 * link = Link to page, or # by default
 * active = If it is the current active page, false by default
 */
const NavBarItem = ({label, link = "#", active = false}) => {
    const activeClass = active ? 'nav-link active' : 'nav-link ';
    const ariaCurrent = active ? {"aria-current":"page"} : {};

    return (
        <li className="nav-item">
            <a className={activeClass} {... ariaCurrent} 
                href={link}>{label}</a>
        </li>
    )
}

export default NavBarItem

