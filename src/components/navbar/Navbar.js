import { Link, NavLink } from "react-router-dom";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <Link to='/'>
          <div className='logo'>GardropsBlog</div>
        </Link>
        <div className='menu-icon' onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/404'>Blogs</NavLink>
            </li>
            <li>
              <NavLink to='/405'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/406'>About</NavLink>
            </li>
            <li>
              <NavLink to='/407'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
