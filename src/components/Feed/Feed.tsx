import axios from 'axios'
import { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import "./Feed.css"

interface Post {
    postID: string;
    title: string;
    postText: string;
    date: string;
  }

const Feed = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get<Post[]>('/api/feed');
          setPosts(response.data);
          console.log(response)
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchPosts();
    }, []);


    return (
      
          <div className="post-feed">
            {posts.map(post => (
              <PostCard
                key={post.postID }
                postID={post.postID}
                title={post.title}
                postText={post.postText}
                date={post.date}
              />
            ))}
          </div>
      );
}

export default Feed;