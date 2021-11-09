import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import Hero from '../assets/images/hand-watch.jpg';

export default function HeroSection() {
    return (
        <>
            <div className="heroSectionDiv" id="home">
                <Container fluid>
                    <Row>
                        <div className="heroSection">
                            <Image src={Hero} fluid />
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
