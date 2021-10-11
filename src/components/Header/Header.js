import { Button } from 'react-bootstrap'
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">The MEAL DB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 mx-5 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Stack direction="horizontal" gap={3}>
                            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                            <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>
                            <NavLink activeStyle={activeStyle} to="/meals">Meals</NavLink>
                            <NavLink activeStyle={activeStyle} to="/categories">Categories</NavLink>
                        </Stack>
                    </Nav>
                    <Form className="d-flex mx-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;