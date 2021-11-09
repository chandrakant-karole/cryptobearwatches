import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Watch from '../assets/images/hand-watch.jpg'

export default function RoadMap() {
    return (
        <>
            <div className="roadMapDiv" id="roadMap">
                <Container>
                    <Row>
                        <div className="roadMapHead">
                            <h2>RoadMap</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis aliquam corrupti doloremque modi eum velit ea sit voluptates voluptatibus magnam accusantium architecto at deleniti dolore, alias iure corporis amet.</p>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className="roadMapList">
                                <ul>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="roadMapImg">
                                <Image src={Watch} fluid/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
