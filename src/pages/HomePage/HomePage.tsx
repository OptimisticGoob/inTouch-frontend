import Feed from "../../components/Feed/Feed"
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu"
import TopBar from "../../components/TopBar/Topbar"
import "./HomePage.css"
const HomePage = () => {
    
    return (
        <><TopBar></TopBar><main>
            <NavigationMenu />
            <Feed></Feed>
        </main></>
    )
}

export default HomePage;