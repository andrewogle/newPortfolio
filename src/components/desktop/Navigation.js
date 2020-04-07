import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const [scroll, setScroll] = useState(true)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY 
      if (scrollCheck < 25) {
        setScroll(!scrollCheck)
      }
    })
  })

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color={scroll? "primary": "dark"} light fixed="top">
        <NavbarBrand href="/" className="mr-auto text-white" >Andrew Ogle</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" color="white"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/" className= "text-white">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap"  className= "text-white">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;