import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FollowerGrid.css'; 
import { useNavigate } from 'react-router-dom';
import FollowerCard from '../FollowerCard/FollowerCard';
interface follower {
  id: number;
  avatarSrc: string;
  username: string;
}

const FollowerGrid: React.FC = () => {
const [followers, setfollowers] = useState<follower[]>([]);
const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<follower[]>('/api/followers');
        setfollowers(response.data);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    fetchData();
  }, []);

  const handleRemovefollower = async (followerId: number) => {
    try {
      await axios.delete(`/api/followers/${followerId}`); 
      setfollowers(prevfollowers => prevfollowers.filter(follower => follower.id !== followerId));
    } catch (error) {
      console.error('Error removing follower:', error);
    }
  };
  const handleVisitfollower = (followerId: number) => {
    navigate(`/user/${followerId}`);
  };


  return (
    <div className="follower-grid">
      {followers.map(follower => (
        <FollowerCard
          key={follower.id}
          avatarSrc={follower.avatarSrc}
          username={follower.username}
          onCloseClick={() => handleRemovefollower(follower.id)}
          onVisitClick={() => handleVisitfollower(follower.id)}
        />
      ))}
    </div>
  );
};

export default FollowerGrid;