import React,{useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './mobileNav.css'

const MobileNav = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar className = 'mobileNav' color="secondary" light>
          <NavbarBrand href="/" className="mr-auto">Andrew Ogle</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
              <NavItem>
              <div>
        <a className="icon" href="https://www.linkedin.com/in/andrew-ogle/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="icon" href="https://github.com/andrewogle">
        <i class="fab fa-github-square"></i>
        </a>
        <a className="icon" href="https://twitter.com/fullstackandrew">
        <i class="fab fa-twitter-square"></i>
        </a>
      </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}
 
export default MobileNav;