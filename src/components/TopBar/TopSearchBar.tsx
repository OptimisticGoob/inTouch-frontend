import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TopSearchBar.css";

interface SearchBarProps {
  onSearch: (results: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='search-input' type="text" value={query} onChange={handleChange} placeholder="Search" />
      <button className='search-button' type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
