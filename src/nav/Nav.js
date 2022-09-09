import React from 'react'
import Logo from '../assets/logo/logo.jpg';
import { NavLink } from 'react-router-dom';
const Nav = () => {

    

    const links = [
        {name:"home",link:"/"},
        {name:"about us",link:"/about-us"},
        {name:"what we do",link:"what-we-do"},
        {name:"news",link:"news"},
        {name:"contact us",link:"contact"},
]
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} width="80" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <NavLink className="nav-link text-capitalize" aria-current="page" to={link.link}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav