import React, { useState } from 'react';
import './Header.css';
import {Fade} from "react-reveal";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <Fade top duration={1000} distance="20px"  >
      <div style={{width:"100%", position: "fixed" , top:"0"}}>
    
        <Navbar   color="light" light expand="md" sticky={'top'}>
          <NavbarBrand href="/" className="mybrand" style={{color: '#0055B7', fontSize : '1.6em'}}>Ahmed Abdulkarim</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="justify-content-end" style={{ width: "100%" }}  navbar>
              <NavItem>
                <NavLink onClick={toggle} href="#greeting" style={{color: '#0055B7', fontSize : '1.1em'}}>Greetings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggle} href="#skills" style={{color: '#0055B7', fontSize : '1.1em'}}>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggle} href="#projects" style={{color: '#0055B7', fontSize : '1.1em'}}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggle} href="#experience" style={{color: '#0055B7', fontSize : '1.1em'}}>Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggle} href="#contact" style={{color: '#0055B7' , fontSize : '1.1em'}}>Contact</NavLink>
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
      </Fade>
    );
  }
  
  export default Header;

