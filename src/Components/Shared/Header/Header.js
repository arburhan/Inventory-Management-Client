import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Header.css';
import avatar from '../../../Images/user.png';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    const logOutUser = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={CustomLink} to='/' href="#home">AR Grocery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={CustomLink} to='/home' href="#home">Home</Nav.Link>
                            {
                                !user ? undefined : <Nav.Link as={CustomLink} to='/additem' href="#additem">Add Item</Nav.Link>
                            }
                            {
                                !user ? undefined : <Nav.Link as={CustomLink} to='/manageInventory' href="#manageInventory">Manage Items</Nav.Link>
                            }
                            {
                                !user ? undefined : <Nav.Link as={CustomLink} to='/myitems' href="#myitems">My Items</Nav.Link>
                            }
                            <Nav.Link as={CustomLink} to='/blogs' href="#blogs">Blogs</Nav.Link>
                            {
                                !user ?
                                    <Nav.Link as={CustomLink} to='login' href="#login">Login</Nav.Link>
                                    : < NavDropdown title={user.photoURL == null ? <img className='img-fluid top-img dropdown-toggle' src={avatar} alt="" /> : <img className='img-fluid top-img dropdown-toggle' src={user.photoURL} alt="" />} id="navbarScrollingDropdown" >
                                        <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Favourite Products</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            <button className='bg-transparent border-0' onClick={logOutUser}>Logout</button>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline 3px solid #d00000" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default Header;