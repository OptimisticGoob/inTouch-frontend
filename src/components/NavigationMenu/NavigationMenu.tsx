import { Link } from 'react-router-dom'
import "./NavigationMenu.css"
export const NavigationMenu = () => {
    return (
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/friends">Friends</Link>
            </li>
            <li className="nav-item">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      );
}

export default NavigationMenu