import { faDiscord, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
    return (
        <div className="topBar">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Cryptobearwatches</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '400px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#roadMap">RoadMap</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="/.">Gallery</Nav.Link>
                            <Nav.Link href="/..">Members</Nav.Link>
                            <Nav.Link href="/">Provenance</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#buy">Buy here</Nav.Link>
                        </Nav>
                        <a href="/" className="topSocial-link mx-2"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="/" className="topSocial-link mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="/" className="topSocial-link mx-2"><FontAwesomeIcon icon={faDiscord} /></a>
                        <a href="/" className="topSocial-link mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
                        {/* <Button variant="outline-success"><FontAwesomeIcon icon={faTwitter}/></Button> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
