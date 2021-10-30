import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar className="header"  variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand href="#home"><b>Travel & Explore</b></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#places">Tour Place Options</Nav.Link>
                                <Nav.Link as={Link} to="/addPlace">Add Place</Nav.Link>
                                <Nav.Link as={Link} to="/whyUs">Why Us</Nav.Link>
                                <Nav.Link as={Link} to="/features">Features</Nav.Link>
                                <Nav.Link as={Link} to="/manageAllOrders">ManageAllOrders</Nav.Link>



                                {user?.email ?

                                    <Button onClick={logOut} variant="light">Logout</Button> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                                <Navbar.Text>
                                    <a href="#login">{user?.displayName}</a>
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;