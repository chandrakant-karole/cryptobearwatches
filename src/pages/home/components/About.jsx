import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'
import AngelBear from '../../../assets/images/1 10.jpg'
import ArmyBear from '../../../assets/images/1 12.jpg'
import SwagBear from '../../../assets/images/1 11.jpg'
import CapBear from '../../../assets/images/1 9.jpg'
import AboutSlider from './AboutSlider'
// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';




export default function About() {
    return (
        <>
            <div className="main_Container">
                <div className="home_about">
                    <Container>
                        <Row className="w-cont" style={{ justifyContent: "space-between" }}>
                            <Col lg={5}>
                                <div className="home_about_content">
                                    <h1 className="h2_one">WELCOME TO
                                        <span className="h2_two">CRYPTOBEAR WATCH CLUB</span></h1>

                                    <p>CryptoBear Watch Club is a collection of 10,000 exclusive NFT collectibles that will live
                                        on the Ethereum Blockchain. The traits are programmatically assigned but manually drawn
                                        giving each artwork a distinct identity and lending added value to the CryptoBear Watch
                                        Club community.</p>
                                    <p>Your CryptoBear watch doubles as your club membership, unlocks exclusive perks, and grants
                                        you preferential access to events that celebrate the spirited nature of our community.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="home_about_image">
                                    <div className="teamCollage d-none d-sm-block">
                                        <div className="firstRow">
                                            <Image className="inner_collage" src={AngelBear} alt="CryptoBear Watch Club" fluid />
                                            <Image className="inner_collage" src={ArmyBear} alt="CryptoBear Watch Club" fluid />
                                        </div>
                                        <div className="SecondRow">
                                            <Image className="inner_collage" src={SwagBear} alt="CryptoBear Watch Club" fluid />
                                            <Image className="inner_collage" src={CapBear} alt="CryptoBear Watch Club" fluid />
                                        </div>
                                    </div>


                                    <AboutSlider />



                                </div>
                            </Col>

                        </Row>
                    </Container>

                </div>

                {/* <!-- </div> --> */}
            </div>
        </>
    )
}
