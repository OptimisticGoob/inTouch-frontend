import React from 'react';
import './PublicProfile.css'
import { User } from '../../../objects/User';

const onAddFriend = () => {

}

const onRemoveFriend = () => {

}

const currentUserId = "abc123";



const PublicProfile: React.FC<{ user: User }> = ({ user }) => {
  const { name, bio, avatar, friends, userID } = user;

  const isFriend = () =>{
    return (friends.indexOf(currentUserId) > -1);
  }

  return (
    <div className="public-profile">
      <div className='user-display'>
      <img className ="avatar" src={avatar} alt="User Avatar" />
      <h2>{name}</h2>
      
      <p>{bio}</p>

      </div>
      {isFriend() ? (
        <button onClick={onRemoveFriend}>Remove Friend</button>
      ) : (
        <button onClick={onAddFriend}>Add Friend</button>
      )}
    </div>
  );
};

export default PublicProfile;
