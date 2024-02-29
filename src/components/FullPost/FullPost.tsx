import axios from "axios";
import { Link } from "react-router-dom";
import "./FullPost.css"

export interface Post {
    postID: string;
    userID: string;
    username: string;
    title: string;
    body: string;
    location: string;
    date: string;
  
}
// const PublicProfile: React.FC<{ user: User }> = ({ user }) => {
//     const { name, bio, avatar, friends, userID } = user;
// }

const FullPost: React.FC<{post: Post}> =  ({ post }) => {

    const { postID, userID, username, title, body, location, date } = post;

    const fdate = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(fdate);
    const handleLike = async () => {
        try {
         
          await axios.post('/api/post/like', { postId: postID }); 
          console.log('Post liked successfully!');
        } catch (error) {
          console.error('Error liking post:', error);
        }
      };

      const handleAttend = async () => {
        try {
         
          await axios.post('/api/post/like', { postId: postID, userId: "userIDhere" }); 
          console.log('Post liked successfully!');
        } catch (error) {
          console.error('Error liking post:', error);
        }
      };
      
    return (
      <div className="full-post">
        
        <div>
          <strong> {title} </strong>
        </div>
        <hr />
        <div>
          <p> {body} </p>
        </div>
        <hr />
        <div>
          <strong>Location:</strong> {location}
        </div>
        <div>
        </div>
        <div>
          <strong> {formattedDate} </strong>
        </div>
        <div className = "author">
        By: <Link to={`/user/${userID}`}>
            {username}
          </Link>
          </div>
        <div className ='buttons' >
        <button onClick={handleLike}>Like</button>
        <button onClick={handleAttend}>Attend</button>
        </div>
        
      </div>
    );
  };
  
  export default FullPost;