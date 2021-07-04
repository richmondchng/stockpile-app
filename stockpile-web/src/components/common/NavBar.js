import NavBarItem from './NavBarItem';

/**
 * Page navigation bar.
 */
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Stockpile</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav">
                        <NavBarItem id="navHome" label="Home" link="/" active="true"></NavBarItem>
                        <NavBarItem id="navArticle" label="Article" link="/articles"></NavBarItem>
                        <NavBarItem id="navUpload" label="Upload" link="/data-import"></NavBarItem>
                        <NavBarItem id="navAbout" label="About" link="#">
                            <NavBarItem id="navConfigureUploadSchema" label="Configure upload schema" link="#" />
                            <NavBarItem id="navAboutUs" label="About" link="/about" />
                        </NavBarItem>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
