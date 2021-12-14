import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TrunkBear from '../../../assets/images/Panda copy 1.png'
export default function Mint() {
    return (
        <>
            <div className="buyStripContainer" id="buy">
                <div className="main_Container">
                    <Container>
                        <Row>
                            <Col lg={6} className="buyStripCol1" style={{position: "relative"}}>
                                <div className="panda-imgDiv">
                                    <Image src={TrunkBear} alt="CryptoBear Watch Club Mint a Bear" fluid/>
                                </div>
                            </Col>
                            <Col lg={4} className="content buyStripCol2">
                                <div className="mintDiv">
                                    <h2 className="mob-cent mob-cent-">MINT</h2>
                                    <h2 className="mob-cent">A BEAR</h2>
                                    <p className="mab">The whitelist sale will begin towards the end of December 2021 for 24 hours, right before the public sale. We will follow a Dutch auction with prices starting at 3 ETH and reducing by 0.1 ETH every 5 minutes with the floor at 0.5 ETH.</p>
                                    <div className='innerMintDiv'>
                                        <a href="#">MINT A BEAR</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
