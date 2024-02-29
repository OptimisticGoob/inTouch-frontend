import React from 'react';
import './FollowerCard.css';
import { useNavigate } from 'react-router-dom';

interface FollowerCardProps {
  avatarSrc: string;
  username: string;
  userID: string;
}



const FollowerCard: React.FC<FollowerCardProps> = ({ avatarSrc, username, userID }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/user/${userID}`);
  };


  
  return (
    <div className="follower-card" onClick={handleClick}>
      <div className="avatar-container">
        <img src={avatarSrc} alt="Avatar" className="avatar" />
      </div>
      <div className="user-info"> 
        <div className="user-name">{username}</div>
      </div>
    </div>
  );
};

export default FollowerCard
