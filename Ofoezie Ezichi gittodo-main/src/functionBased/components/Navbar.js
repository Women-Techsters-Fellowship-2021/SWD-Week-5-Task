import React, { useState } from "react"

import { NavLink } from "react-router-dom"

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const links = [
    {
      id: 1,
      path: "/",
      text: "Todo App",
    },
    {
      id: 2,
      path: "/about",
      text: "About",},
      {
     id: 3,
      path: "/Register",
      text: "Register",
    
    
    },

{  id: 4,
      path: "/Login",
      text: "Login",



}


  ]

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {
          navbarOpen ?
            <MdClose
              style={{ color: "blue", width: "40px", height: "40px" }}
            /> :
            <FiMenu
              style={{ color: "white", width: "40px", height: "40px" }}
            />
        }
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar
