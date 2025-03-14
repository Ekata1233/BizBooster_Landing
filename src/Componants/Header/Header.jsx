import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Offcanvas, Container } from "react-bootstrap";
import '../Header/Header.css';

function Header() {
    // Offcanvas state management
    const [show, setShow] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className="mb-3"
            style={{
                backgroundColor: scrolling ? "rgba(5, 5, 5, 0.69)" : "transparent",
                transition: "background-color 0.3s ease-in-out",
            }}
        >
            <Container>
                {/* Brand Name */}
                <Navbar.Brand href="#" className="fs-1" style={{ fontWeight: "600", color: " #E5EAEE" }}>BizBooster</Navbar.Brand>

                {/* Offcanvas Toggle Button */}
                <Navbar.Toggle 
                    aria-controls="offcanvasNavbar" 
                    onClick={handleShow} 
                    style={{ borderColor: "white" }} // Ensure border color is white
                >
                    <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span> {/* Ensures icon is white */}
                </Navbar.Toggle>

                {/* Offcanvas Navigation */}
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 my-2">
                            <Nav.Link href="/       " className='nav-link-animated me-3' style={{ fontWeight: "600", color: " #E5EAEE" }}>Home</Nav.Link>
                            <Nav.Link href="/about" className="nav-link-animated me-3 " style={{ fontWeight: "600", color: " #E5EAEE" }}>About Us</Nav.Link>
                           
                            <NavDropdown style={{ fontWeight: "600", color: " #E5EAEE" }} title="Services" id="offcanvasNavbarDropdown" className="nav-link-animated me-3 custom-dropdown" >
                            <NavDropdown.Item href="/moduledescription">Onboarding</NavDropdown.Item>
                                <NavDropdown.Item href="/moduledescription">Business</NavDropdown.Item>
                                <NavDropdown.Item href="/moduledescription">Branding/Marketing</NavDropdown.Item>
                                <NavDropdown.Item href="/moduledescription">Legal Services</NavDropdown.Item>
                                <NavDropdown.Item href="/moduledescription">Home Services</NavDropdown.Item>
                                <NavDropdown.Item href="/moduledescription">IT Services</NavDropdown.Item>
                                <NavDropdown.Item href="/moduledescription">Education</NavDropdown.Item>
                                <NavDropdown.Item href="/moduledescription">Finance Services</NavDropdown.Item>
                                <NavDropdown.Item href="/moduledescription">Franchise</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Join Us" id="offcanvasNavbarDropdown" className="nav-link-animated me-3 custom-dropdown">
                                <NavDropdown.Item href="/serviceprovider">Service Provider</NavDropdown.Item>
                                <NavDropdown.Item href="/becomeourpartner">Become Our Partner</NavDropdown.Item>
                               
                            </NavDropdown>
                            <Nav.Link href="/gallery" className="nav-link-animated me-3 " style={{ fontWeight: "600", color: " #E5EAEE" }}>Gallery</Nav.Link>
                            <Nav.Link href="/contactus" className="nav-link-animated me-3 " style={{ fontWeight: "600", color: " #E5EAEE" }}>Contact Us</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;
