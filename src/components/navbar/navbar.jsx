import React, { useState } from 'react';
import './navbar.sass';

export default function Navbar() {

  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <div className='logo'>
        <h1 className='name'>Arnaud-C18</h1>
      </div>
      <div className='link'>
        <i className="fa-solid fa-bars" onClick={() => setOpenNav(!openNav) }></i>
        <ul className='bigScreenNav'>
          <li><a href='#about'>A propos</a></li>
          <li><a href='#skills'>Compétences</a></li>
          <li><a href='#projects'>Projets</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        {
          openNav &&
          <div className='dropdownMenu'>
            <ul className='smallScreenNav' onClick={() => setOpenNav(!openNav)}>
              <li><a href='#about'>A propos</a></li>
              <li><a href='#skills'>Compétences</a></li>
              <li><a href='#projects'>Projets</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        }
      </div>
    </nav>
  );
};