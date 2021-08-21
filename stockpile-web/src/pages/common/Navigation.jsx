import NavBar from '../../components/common/navigation/NavBar';
import NavBarItem from '../../components/common/navigation/NavBarItem';
import NavBarMenu from '../../components/common/navigation/NavBarMenu';
import NavBarMenuItem from '../../components/common/navigation/NavBarMenuItem';

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
