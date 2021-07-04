import NavBar from './NavBar'
import NavBarItem from './NavBarItem'

const Navigation = ({brand}) => {
    return (
        <NavBar brand={brand}>
            <NavBarItem id="navHome" label="Home" link="/" active="true"></NavBarItem>
            <NavBarItem id="navArticle" label="Article" link="/articles"></NavBarItem>
            <NavBarItem id="navUpload" label="Upload" link="/data-import"></NavBarItem>
            <NavBarItem id="navAdmin" label="Admin" link="#">
                <NavBarItem id="navConfigureUploadSchema" label="Configure upload schema" link="/admin/configure-upload-schemas" />
            </NavBarItem>
            <NavBarItem id="navAboutUs" label="About" link="/about" />
        </NavBar>
    )
}

export default Navigation
