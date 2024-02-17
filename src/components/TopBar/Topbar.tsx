import React from 'react';
import './Topbar.css'; // Import CSS file for styling
import SearchBar from './TopSearchBar';
import { useLocation } from 'react-router-dom';


const TopBar: React.FC = () => {

    const location = useLocation();
    const currentPage = location.pathname;

  return (
    <div className="top-bar">
      <div className="left-section">
        <h1>InTouch</h1>
        <img className="app-logo" src="src/assets/logoSpiral.svg" alt="DotSpiral" />
      </div>
      {currentPage === '/' ? (
       <div className="center-section">
       <SearchBar onSearch={function (results: any[]): void {
                 throw new Error('');
             } } />
     </div>
      ) : currentPage === '/profile' ? (
        <div className="center-section">
          <h1>Profile</h1>
        </div>
      ) : currentPage === '/friends' ? (
        <div className="center-section">
          <h1>Friends</h1>
        </div>
      )  : currentPage.startsWith('/user') ? (
        <div className="center-section">
          <h1>User</h1>
        </div>
      ): null} {}
      {/* <div className="center-section">
        <SearchBar onSearch={function (results: any[]): void {
                  throw new Error('');
              } } />
      </div> */}
    </div>
  );
};

export default TopBar;
