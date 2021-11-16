import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Watch from '../assets/images/kelvin-lutan-WwJhYcX-pFI-unsplash.jpg'

export default function RoadMap() {
    return (
        <>
            <div className="roadMapDiv" id="roadMap">
                <Container>
                    <Row>
                        <div className="roadMapHead">
                            <h2>RoadMap</h2>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={8} md={12} sm={12}>
                            <div className="roadMapList">
                                {/* <ul>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                </ul> */}
                                <div className="roadMap_block">
                                    <div className="roadMap_row">
                                        <div className="roadMap_step">
                                            <div className="roadMap_circle">STAGE 01</div>
                                        </div>
                                        <div className="roadMap_content">
                                            Private discord channel goes live exclusively for CryptoBear Watch Club members. Members gain access to global watch influencers.
                                        </div>
                                    </div>
                                    <div className="roadMap_row">
                                        <div className="roadMap_step">
                                            <div className="roadMap_circle">STAGE 02 </div>
                                        </div>
                                        <div className="roadMap_content">
                                            The first 200 mints are awarded limited-edition CryptoBear merchandise via random airdrops in their wallet as well as physical merchandise. Members can design their own watches with the activation of a new board. The first 200 minters also enter a raffle to win a real limited-edition watch.
                                        </div>
                                    </div>
                                    <div className="roadMap_row">
                                        <div className="roadMap_step">
                                            <div className="roadMap_circle">STAGE 03</div>
                                        </div>
                                        <div className="roadMap_content">
                                            We're halfway there! At this point, a crypto coin dedicated to collecting luxury NFTs is launched. Limited-time offers / giveaways will also be available to club members.
                                        </div>
                                    </div>
                                    <div className="roadMap_row">
                                        <div className="roadMap_step">
                                            <div className="roadMap_circle">STAGE 04</div>
                                        </div>
                                        <div className="roadMap_content">
                                            CryptoBear Watch Club is officially launched in the metaverse through partnerships with Sandbox / Meta.
                                        </div>
                                    </div>
                                    <div className="roadMap_row">
                                        <div className="roadMap_step">
                                            <div className="roadMap_circle">STAGE 05 </div>
                                        </div>
                                        <div className="roadMap_content">
                                            Members can use their NFTs as avatars in the metaverse. In addition,
                                            a unique CryptoBear NFT is randomly airdropped to one lucky member on reaching the goal of minting all 10,000 collectibles.
                                        </div>
                                    </div>
                                </div>
                                <p>Members who hold their NFTs for a longer period will be eligible for rewards such as real premium watches and random airdrops.</p>
                                <p>Members who mint the "unique collectible" will be also awarded with a limited-edition real watch.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div className="roadMapImg">
                                <Image src={Watch} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
