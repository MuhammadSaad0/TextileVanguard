import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import {  useNavigate } from 'react-router-dom';

import "./NavBar.css";
import logo from "./assets/logo.jpeg";

function NavBar() { 
  const navigate = useNavigate();

   return (
    <nav>
      <img src={logo} className="logo"></img>
      <Menu menuButton={<MenuButton className="menuButton">☰</MenuButton>} transition  menuClassName="my-menu">
      <MenuItem className="my-menuitem" onClick={() => navigate("/")}>Home</MenuItem>
      <MenuItem className="my-menuitem" onClick={() => navigate("/products")}>Products</MenuItem>
      <MenuItem className="my-menuitem" onClick={() => navigate("/contact")}>Contact</MenuItem>
    </Menu>
      <ul id="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
