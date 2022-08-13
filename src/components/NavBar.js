import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav>
      <ul className="navBar">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} activeclassname="active-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
