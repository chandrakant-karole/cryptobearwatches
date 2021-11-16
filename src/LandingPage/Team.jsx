import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Male from '../assets/images/TeamMale.png'

export default function Team() {
    return (
        <>
        <div className="teamDiv" id="team">
            <Container>
                <Row>
                    <div className="teamSectionHead">
                        <h2>Meet Our Team</h2>
                        <p>CryptoBear Watch Club is the brainchild of Xxxxxxxxx, a game-changing NFT enterprise based in Xxxxxxxxxx. The crew comprises entrepreneurs, developers and watch connoisseurs with a wealth of experience in the NFT space.</p>
                    </div>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Male} fluid/>
                            <h4>Name</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Male} fluid/>
                            <h4>Name</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Male} fluid/>
                            <h4>Name</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Male} fluid/>
                            <h4>Name</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
