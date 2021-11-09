import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import HandWatch from '../assets/images/hand-watch.jpg'

export default function AboutSection() {
    return (
        <>
            <div className="aboutSectionDiv" id="about">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="aboutContent">
                                <h2>Heading</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio in aperiam nobis alias quos eaque! Minima ea distinctio a enim! Voluptas quisquam repudiandae sed exercitationem blanditiis, dolor dolore at!</p>
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
