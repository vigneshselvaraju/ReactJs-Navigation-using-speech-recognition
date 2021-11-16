import "./Page.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="navbar-nav">
        <h2>{props.name}</h2>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/information" className="nav-item">
            Information
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
