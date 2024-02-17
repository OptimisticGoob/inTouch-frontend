import React from 'react';
import './FriendCard.css';

interface FriendCardProps {
  avatarSrc: string;
  username: string;
  onCloseClick: () => void;
  onVisitClick: () => void;
}

const FriendCard: React.FC<FriendCardProps> = ({ avatarSrc, username, onCloseClick, onVisitClick }) => {
  return (
    <div className="friend-card">
      <button className="close-button" onClick={onCloseClick}>X</button>
      <div className="avatar-container">
        <img src={avatarSrc} alt="Avatar" className="avatar" />
      </div>
      <div className="username">{username}</div>
      <button className="visit-button" onClick={onVisitClick}>Profile</button>
    </div>
  );
};

export default FriendCard
