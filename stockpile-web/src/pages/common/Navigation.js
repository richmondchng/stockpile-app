import NavBar from '../../components/common/navigation/NavBar'
import NavBarItem from '../../components/common/navigation/NavBarItem'

const Navigation = ({brand}) => {
    return (
        <NavBar brand={brand}>
            <NavBarItem id="navHome" label="Home" link="/" active="true"></NavBarItem>
            <NavBarItem id="navArticle" label="Article" link="/articles"></NavBarItem>
            <NavBarItem id="navUpload" label="Upload" link="/data-import"></NavBarItem>
            <NavBarItem id="navAdmin" label="Administration" link="#">
                <NavBarItem id="navConfigureUploadSchema" label="Upload schema" link="/admin/configure-upload-schemas" />
            </NavBarItem>
            <NavBarItem id="navAboutUs" label="About" link="/about" />
        </NavBar>
    )
}

export default Navigation
