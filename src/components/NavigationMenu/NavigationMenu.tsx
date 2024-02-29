import { Link } from 'react-router-dom'
import "./NavigationMenu.css"
export const NavigationMenu = () => {
    return (
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/"><div>Home</div></Link>
            </li>
            <li className="nav-item">
              <Link to="/profile"><div>Profile</div></Link>
            </li>
            <li className="nav-item">
              <Link to="/Followers"><div>Followers</div></Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/settings"><div>Settings</div></Link>
            </li> */}
          </ul>
        </nav>
      );
}

export default NavigationMenu