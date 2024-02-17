import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FriendGrid.css'; 
import { useNavigate } from 'react-router-dom';
import FriendCard from '../FriendCard/FriendCard';
interface Friend {
  id: number;
  avatarSrc: string;
  username: string;
}

const FriendGrid: React.FC = () => {
const [friends, setFriends] = useState<Friend[]>([]);
const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Friend[]>('/api/friends');
        setFriends(response.data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveFriend = async (friendId: number) => {
    try {
      await axios.delete(`/api/friends/${friendId}`); 
      setFriends(prevFriends => prevFriends.filter(friend => friend.id !== friendId));
    } catch (error) {
      console.error('Error removing friend:', error);
    }
  };
  const handleVisitFriend = (friendId: number) => {
    navigate(`/user/${friendId}`);
  };


  return (
    <div className="friend-grid">
      {friends.map(friend => (
        <FriendCard
          key={friend.id}
          avatarSrc={friend.avatarSrc}
          username={friend.username}
          onCloseClick={() => handleRemoveFriend(friend.id)}
          onVisitClick={() => handleVisitFriend(friend.id)}
        />
      ))}
    </div>
  );
};

export default FriendGrid;