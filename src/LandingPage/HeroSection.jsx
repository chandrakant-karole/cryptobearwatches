import React from 'react'
import { Container, Row} from 'react-bootstrap'
// import Hero from '../assets/images/hand-watch.jpg';
import AnimateEffect from './AnimateEffect'
export default function HeroSection() {
    return (
        <>
            <div className="heroSectionDiv" id="home">
                <AnimateEffect/>
                <Container fluid>
                    <Row>
                        <div className="heroSection">
                            {/* <Image src={Hero} fluid /> */}
                            {/* <h1>WELCOME TO CRYPTOBEAR WATCH CLUB</h1>
                            <p>Explore a collection of 10,000 exclusive aesthetic NFTs with preferential access to member-only benefits. Find your fit in the metaverse. </p>
                            <a href="/" className="buyNowBtn">Buy Now</a> */}
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
