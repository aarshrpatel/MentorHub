import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const style = {
    navBar: {
        flexGrow: 1,
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        display: 'inline-block',
        padding: '10px 0 10px 0',
        borderBottom: '3px solid black',
    },

    navContainer: {
        paddingTop: '5px',
        display: 'inline-flex',
        width: '95%',
        maxWidth: '100%',
    },

    navBrand: {
        fontSize: '20pt',
        paddingRight: '1%',
        borderRight: '3px solid black',
    },

    navLinkDropdown: {
        width: '100%',
        display: 'flex',
        textDecoration: 'none',
        textAlign: 'center',
    },

    navLinkContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
    },

    navButton: {
        border: '2px solid black',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '3px 10px 3px 10px',
    },
};

const NavBar = () => {
    const [isOverflow, setIsOverflow] = useState(false);  // state for small screen
    const [dropdownOpen, setDropdownOpen] = useState(false);  // state for drop down

    const checkScreenSize = () => {
        setIsOverflow(window.innerWidth < 450);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    })

    // Use to close and open the drop down
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={style.navBar}>
            <Container style={style.navContainer}>
                <Navbar.Brand style={style.navBrand}>MentorHub</Navbar.Brand>
                
                {/* {isOverflow ? (
                    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={toggleDropdown} style={style.navButton}>Home</Dropdown.Item>
                            <Dropdown.Item onClick={toggleDropdown} style={style.navButton} href="#discovery">Discovery</Dropdown.Item>
                            <Dropdown.Item onClick={toggleDropdown} style={style.navButton} href="#social">Social</Dropdown.Item>
                            <Dropdown.Item onClick={toggleDropdown} style={style.navButton} href="#profile">Profile</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : ( */}
                <Nav className="me-auto" style={style.navLinkContainer}>
                    <Nav.Link style={style.navButton} href="#home">Home</Nav.Link>
                    <Nav.Link style={style.navButton} href="#discovery">Discovery</Nav.Link>
                    <Nav.Link style={style.navButton} href="#social">Social</Nav.Link>
                    <Nav.Link style={style.navButton} href="#profile">Profile</Nav.Link>
                </Nav>
                {/* )} */}

            </Container>
        </Navbar>
    );
}

export default NavBar;
