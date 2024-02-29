import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FollowerGrid.css'; 
import { useNavigate } from 'react-router-dom';
import FollowerCard from '../FollowerCard/FollowerCard';
interface follower {
  id: string;
  avatarSrc: string;
  username: string;
}

const FollowerGrid = () => {
const [followers, setfollowers] = useState<follower[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<follower[]>('/api/followers');
        setfollowers(response.data);
        console.log(followers)
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    fetchData();
  }, []);

 
 

  return (
    <div className="follower-grid">
      {followers.map((follower) => (
        <FollowerCard
          key={follower.id}
          avatarSrc={follower.avatarSrc}
          username={follower.username}
          userID={follower.id} // Assuming userID is a string
        />
      ))}
       
    </div>
  );
};

export default FollowerGrid;