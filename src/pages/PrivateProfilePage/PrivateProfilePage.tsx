import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import PrivateProfile from "../../components/Profile/Private/PrivateProfile";
import TopBar from "../../components/TopBar/Topbar";
import "./PrivateProfilePage.css"

const PrivateProfilePage = () => {
    
    return (
        <main className="main-container">
            <TopBar />
            <NavigationMenu />
            <PrivateProfile />
        </main>
    )
}

export default PrivateProfilePage;