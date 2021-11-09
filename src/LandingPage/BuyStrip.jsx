import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function BuyStrip() {
    return (
        <>
        <div className="buyStripDiv" id="buy">
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="buyStripLeft">
                        <h3>heading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa explicabo suscipit officia mollitia obcaecati animi non ut sapiente ducimus pariatur possimus laborum culpa provident, reprehenderit voluptates ratione placeat beatae!</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="buyStripRight">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dignissimos consequatur quisquam, sapiente ad atque ipsa modi omnis similique dolore expedita quod porro? Maxime autem alias possimus velit facilis sequi!</p>
                        </div>
                    </Col>
                </Row>

                <Row className="buyStripRow">
                    <Col lg={4}>
                        <div className="buyTextDiv">
                            <h2>BUY AN WATCH</h2>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="buyTextPara">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus similique ea voluptas commodi incidunt quisquam consequatur consectetur distinctio deserunt?</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="buyTextButton">
                            <Button>BUY AN CRYPTOBEARWATCHES ON OPENSEA</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
