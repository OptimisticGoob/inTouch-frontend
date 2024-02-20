import React from 'react';
import './FollowerCard.css';

interface FollowerCardProps {
  avatarSrc: string;
  username: string;
  onCloseClick: () => void;
  onVisitClick: () => void;
}

const FollowerCard: React.FC<FollowerCardProps> = ({ avatarSrc, username, onCloseClick, onVisitClick }) => {
  return (
    <div className="Follower-card">
      <button className="close-button" onClick={onCloseClick}>X</button>
      <div className="avatar-container">
        <img src={avatarSrc} alt="Avatar" className="avatar" />
      </div>
      <div className="username">{username}</div>
      <button className="visit-button" onClick={onVisitClick}>Profile</button>
    </div>
  );
};

export default FollowerCard
