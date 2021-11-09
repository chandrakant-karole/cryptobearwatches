import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Dummy from '../assets/images/dummy.jpg'

export default function Team() {
    return (
        <>
        <div className="teamDiv" id="team">
            <Container>
                <Row>
                    <div className="teamSectionHead">
                        <h2>Meet Our Team</h2>
                    </div>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Dummy} fluid/>
                            <h4>Name</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Dummy} fluid/>
                            <h4>Name</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Dummy} fluid/>
                            <h4>Name</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="teamMember">
                            <Image src={Dummy} fluid/>
                            <h4>Name</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
