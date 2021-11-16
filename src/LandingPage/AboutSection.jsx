import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import HandWatch from '../assets/images/pat-taylor-12V36G17IbQ-unsplash.jpg'

export default function AboutSection() {
    return (
        <>
            <div className="aboutSectionDiv" id="about">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="aboutContent">
                                <h2>ABOUT</h2>
                                <p>CryptoBear Watch Club is a collection of 10,000 exclusive NFT collectibles that will live on the Ethereum Blockchain. The traits are programatically assigned but manually drawn giving each artwork a distinct identity and lending added value to the CryptoBear Watch Club community.</p>
                                <p>Your CryptoBear watch doubles as your club membership, unlocks exclusive perks and grants you preferential access to events that celebrate the bearish nature of our community.</p>
                                <h2>SPECS</h2>
                                <p>Each CryptoBear collectible is hand-drawn and randomly generated from over XXX possible attributes such as timepiece, expressions, headwear, clothing, accessories, etc.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="aboutImage">
                                <Image src={HandWatch} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
