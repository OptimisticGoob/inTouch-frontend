import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface User {
    id: number;
    username: string;
}

interface SearchBarProps {
  onSearch: (users: User[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get<User[]>(`/api/users?q=${query}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} placeholder="Search for users..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
