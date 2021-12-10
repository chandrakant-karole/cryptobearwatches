import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TrunkBear from '../../../assets/images/Panda copy 1.png'
export default function Mint() {
    return (
        <>
            <div class="buyStripContainer" id="buy">
                <div class="main_Container">
                    <Container>
                        <Row>
                            <Col lg={6} class="buyStripCol1" style={{position: "relative"}}>
                                <div class="panda-imgDiv">
                                    <Image src={TrunkBear} alt="CryptoBear Watch Club Mint a Bear" fluid/>
                                </div>
                            </Col>
                            <Col lg={4} class="content buyStripCol2">
                                <div class="mintDiv">
                                    <h2 class="mob-cent mob-cent-">MINT</h2>
                                    <h2 class="mob-cent">A BEAR</h2>
                                    <p class="mab">The whitelist sale will begin towards the end of December 2021 for 24 hours, right before the public sale. We will follow a Dutch auction with prices starting at 3 ETH and reducing by 0.1 ETH every 5 minutes with the floor at 0.5 ETH.</p>
                                    {/* <!--<a href="#">MINT A BEAR</a>--> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
