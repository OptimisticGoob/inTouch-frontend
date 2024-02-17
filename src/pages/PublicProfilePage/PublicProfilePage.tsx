import { useEffect, useState } from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu"
import PublicProfile from "../../components/Profile/Public/PublicProfile"
import TopBar from "../../components/TopBar/Topbar"
import { User } from "../../objects/User";
import axios from "axios";
import { useParams } from "react-router-dom";


const PublicProfilePage = () => {


    const [user, setUser] = useState<User>({
        name: '',
        bio: '',
        avatar: '',
        friends: [],
        userID: '',
    });

    const { userId } = useParams<{ userId: string }>();


    useEffect(() => {
       
        const fetchUser = async () => {
            try {
                const response = await axios.get<User>(`/api/user/${userId}`);
                setUser(response.data);
               

            } catch (error){
                console.error('error fetching user', error)
            }
        }

        fetchUser()
        console.log("just got user: ",user)

    }, []);

    return(
    <main className="main-container">
        <TopBar />
        <NavigationMenu />
        <PublicProfile user={user}></PublicProfile>
    </main>
    )

}

export default PublicProfilePage