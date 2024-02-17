import React, { useState } from 'react';
import axios from 'axios';

import UserList from './UserList';
import SearchBar from './SearchBar';


interface User {
  id: number;
  username: string;
}

const UserSearch: React.FC = () => {
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = (results: User[]) => {
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <UserList users={searchResults} />
    </div>
  );
};

export default UserSearch;
