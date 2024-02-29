import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBar/Topbar";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import FullPost, { Post } from "../../components/FullPost/FullPost";

const PostPage = () => {

   
    const [post, setPost] = useState<Post>({
        postID: '',
        userID: '',
        username: '',
        title: '',
        body: '',
        location: '',
        date: '2000-01-01 00:00:00',
    });

    const { postId } = useParams<{ postId: string }>();


    useEffect(() => {
       
        const fetchUser = async () => {
            try {
                const response = await axios.get<Post>(`/api/post/${postId}`);
                setPost(response.data);
               

            } catch (error){
                console.error('error fetching user', error)
            }
        }

        fetchUser()
        console.log("just got Post: ",post)

    }, []);

    return(
    <main className="main-container">
        <TopBar />
        <NavigationMenu />
        <FullPost post = {post}></FullPost>
    </main>
    )

}

export default PostPage