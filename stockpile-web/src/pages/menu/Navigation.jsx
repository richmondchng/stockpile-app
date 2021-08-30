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
            <NavBarItem idx="navHome" link="/" active={true}>Home</NavBarItem>
            <NavBarItem idx="navArticle" link="/articles">Article</NavBarItem>
            <NavBarItem idx="navUpload" link="/data-import">Upload</NavBarItem>
            <NavBarMenu idx="navAdmin" label="Administration">
                <NavBarMenuItem idx="navConfigureUploadSchema" link="/admin/configure-upload-schemas">Upload schema</NavBarMenuItem>
            </NavBarMenu>
            <NavBarItem idx="navAboutUs" label="About" link="/about">About</NavBarItem>
        </NavBar>
    )
}

export default Navigation
