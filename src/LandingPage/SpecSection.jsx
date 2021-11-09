import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import HandWatchCollage from '../assets/images/watch-collage.png'

export default function SpecSection() {
    return (
        <>
            <div className="specSectionDiv">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="specContent">
                                <h2>Heading</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio in aperiam nobis alias quos eaque! Minima ea distinctio a enim! Voluptas quisquam repudiandae sed exercitationem blanditiis, dolor dolore at!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="specImage">
                                <Image src={HandWatchCollage} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
