import React from 'react';

interface User {
  id: number;
  username: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
};

export default UserList;
