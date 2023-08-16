import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./assets/logo.jpeg";
function NavBar() {
  return (
    <nav>
      <img src={logo} className="logo"></img>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
