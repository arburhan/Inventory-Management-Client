import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={CustomLink} to='/' href="#home">Inventory Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to='/home' href="#home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to='login' href="#login">Log in</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blogs' href="#blogs">Blogs</Nav.Link>
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