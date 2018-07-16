import React from 'react';
import {Navbar, Nav, NavItem, Header, Brand, Collapse, Toggle} from 'react-bootstrap';
import logo from '../images/logo.png';
import './nav-bar.less';

const NavBar = () => {

	return (
		<Navbar>
		  <Navbar.Header>
		    <Navbar.Brand>
		      <a href="/home"><img src={logo}/></a>
		    </Navbar.Brand>
		    <Navbar.Toggle/>
		  </Navbar.Header>
		  <Navbar.Collapse>
		   <Nav pullRight className="center">
		    <NavItem href="#">
		      <i className="fas fa-mobile-alt"></i> 0242348479
		    </NavItem>
		   </Nav>
		   <Nav pullRight>
		    <NavItem href="/home">
		      Home
		    </NavItem>
		    <NavItem href="/who-we-are">
		      Who we are
		    </NavItem>
		    <NavItem href="/services">
		      Services
		    </NavItem>
		   </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar;