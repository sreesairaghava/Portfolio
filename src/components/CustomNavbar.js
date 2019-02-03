import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../components/CustomNavbar.css';
class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">
                        RaghavaCodes
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/"  >
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about"  >
                            About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link}  to="/work" href="/work"  >
                           Work
                        </NavItem>
                    
                    </Nav>
                </Navbar.Collapse>
            
            </Navbar>
        );
    }
}

export default CustomNavbar;