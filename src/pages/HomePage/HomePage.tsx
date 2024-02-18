import Feed from "../../components/Feed/Feed"
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu"
import SubmitButton from "../../components/Submission/SubmissionButton/SubmitButton"
import TopBar from "../../components/TopBar/Topbar"
import "./HomePage.css"
const HomePage = () => {

    return (
        <>
            <TopBar />
            <main>
                <NavigationMenu />
                <SubmitButton></SubmitButton>
                <Feed></Feed>
            </main>
        </>
    )
}

export default HomePage;