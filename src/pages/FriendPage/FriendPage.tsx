import FriendGrid from "../../components/Friend/FriendGrid/FriendGrid"
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu"
import TopBar from "../../components/TopBar/Topbar"

const FriendPage = () => {


    return (
        <main>
        <TopBar></TopBar>
        <NavigationMenu />
        <FriendGrid />
        </main>
    )
}

export default FriendPage