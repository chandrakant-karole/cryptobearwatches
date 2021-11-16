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
                        <p>CryptoBear Watch Club is the brainchild of OtharenBear, founder, CEO, digital morpheus and the lynchpin. Headquartered in Dubai – United Arab Emirates, The crew comprises entrepreneurs, developers, content specialists and watch connoisseurs with a wealth of experience in the NFT space.</p>
                    </div>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Male} fluid/>
                            <h4>OtharenBear – Founder & CEO</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Male} fluid/>
                            <h4>JDcodedBear – Design Director</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Male} fluid/>
                            <h4>JediKodaBear – Project Manager</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Male} fluid/>
                            <h4>ShakesBear – Content Manager</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
