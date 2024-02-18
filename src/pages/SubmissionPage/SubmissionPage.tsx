
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu"
import SubmissionForm from "../../components/Submission/SubmissionForm/SubmissionForm"
import TopBar from "../../components/TopBar/Topbar"

const SubmissionPage = () => {

    return (
        <>
            <TopBar />
            <main className="main-container">
                <NavigationMenu />
               <SubmissionForm />
            </main>
        </>
    )
}

export default SubmissionPage
