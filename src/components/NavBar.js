import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const links = [

    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav>
      <ul className="navBar">
        <div className="navList">
          <li id="logo">
            <Link to="/">Bookstore CMS </Link>
          </li>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path} activeclassname="active-link">
                {link.text}
              </Link>
            </li>
          ))}
        </div>
        <div className="profile-icon">
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
