import NavBar from '../../components/ui/navigation/NavBar';
import NavBarItem from '../../components/ui/navigation/NavBarItem';
import NavBarMenu from '../../components/ui/navigation/NavBarMenu';
import NavBarMenuItem from '../../components/ui/navigation/NavBarMenuItem';

/**
 * Navigation menu bar.
 * @param {*} param0 
 * @returns 
 */
const Navigation = ({brand}) => {
    return (
        <NavBar brand={brand}>
            <NavBarItem id="navHome" link="/" active={true}>Home</NavBarItem>
            <NavBarItem id="navArticle" link="/articles">Article</NavBarItem>
            <NavBarItem id="navUpload" link="/data-import">Upload</NavBarItem>
            <NavBarMenu id="navAdmin" label="Administration">
                <NavBarMenuItem id="navConfigureUploadSchema" link="/admin/configure-upload-schemas">Upload schema</NavBarMenuItem>
            </NavBarMenu>
            <NavBarItem id="navAboutUs" label="About" link="/about">About</NavBarItem>
        </NavBar>
    )
}

export default Navigation
