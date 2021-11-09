import { faDiscord, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <div className="footerDiv">
                <Container>
                    <Row>
                        <Col>
                            <div className="footer">
                                <div className="footerLeft">
                                    <h2>Cryptobearwatches</h2>
                                </div>
                                <div className="footerDetails">
                                    <div className="footerSocial">
                                        <a className="mx-2" href="/"><FontAwesomeIcon icon={faYoutube}/></a>
                                        <a className="mx-2" href="/"><FontAwesomeIcon icon={faInstagram}/></a>
                                        <a className="mx-2" href="/"><FontAwesomeIcon icon={faDiscord}/></a>
                                        <a className="mx-2" href="/"><FontAwesomeIcon icon={faTwitter}/></a>
                                    </div>
                                    <p>© 2021 Cryptobearwatches</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
