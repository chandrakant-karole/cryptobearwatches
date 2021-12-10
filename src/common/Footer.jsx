import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Logo from '../assets/images/Logo 1.png'
import Instagram from '../assets/images/instagram@2x.png'
import Discord from '../assets/images/discord@2x.png'
import Twitter from '../assets/images/twiter@2x.png'
export default function Footer() {
    return (
        <>
            <div className="main_Container">
                <div className="mainfooterDiv">
                    <Container className="footerIndex">
                        <Row style={{alignItems: "center", padding: "40px", borderTop: "1px solid #fff"}}>
                            {/* <!--<div className="col-lg-4 footerIndexCol1">
                            <div className="email-container"><span className="email-label">GET ON THE LIST</span><br>
                                <div className="">
                                    <form id="email-submit" method="post" name="mc-embedded-subscribe-form" target="_blank"
                                        className="email-form"><input id="email-address" className="m-0 email-input-text"
                                            type="email" placeholder="Email Address" name="EMAIL" required="" value="">
                                            <div aria-hidden="true" style="position: absolute;left: -5000px;"><input type="text"
                                                name="b_c979ffabc41007fd79ffe121b_b785550a9e" tabindex="-1" value=""></div>
                                            <button name="subscribe" className="email-submit" type="submit">→</button>
                                    </form>--> */}

                            {/* <!--<a href="mailto:info@cryptobearwatchclub.io" className="cu">
                                        <i className="fa fa-envelope" aria-hidden="true"></i> info@cryptobearwatchclub.io
                                    </a>
                                </div>
                            </div>
                            </div>--> */}
                            <Col lg={4} className="footerIndexCol1">
                                <div className="email-container"><span className="email-label">GET ON THE LIST</span><br/>
                                    <div className="d-flex email-flex"><br/>
                                        <form id="email-submit" method="post" name="mc-embedded-subscribe-form" className="email-form" novalidate="">
                                            <input id="email-address" className="m-0 email-input-text" type="email" placeholder="Email Address" name="email"/>
                                                {/* <!--<div aria-hidden="true" style="position: absolute;left: -5000px;"><input type="text"
                                                name="b_c979ffabc41007fd79ffe121b_b785550a9e" tabindex="-1" value=""></div>--> */}
                                                <button name="subscribe" className="email-submit" type="submit">→</button>
                                        </form>
                                    </div>
                                    <div className="result"></div>
                                </div>
                            </Col>
                            <Col lg={4} className="footerIndexCol2">
                                <div className="footer_site_name">
                                    <Image src={Logo} alt="CryptoBear Watch Club" fluid/>
                                </div>
                            </Col>
                            <Col lg={4} className="footerIndexCol3">
                                <div className="footer_rightDiv cr">
                                    <div className="footer_social_link nvico">
                                        <a target="_blank" rel="noreferrer" className="footer_href" href="https://www.instagram.com/cryptobearwatchclub/?utm_medium=copy_link">
                                            <Image src={Instagram} alt="CryptoBear Watch Club instagram"/>
                                        </a>
                                        <a target="_blank" rel="noreferrer" className="footer_href" href="https://discord.gg/cryptobearwatchclub">
                                            <Image src={Discord} alt="CryptoBear Watch Club discord"/>
                                        </a>
                                        <a target="_blank" rel="noreferrer" className="footer_href" href="https://twitter.com/CryptoBearWC">
                                            <Image src={Twitter} alt="CryptoBear Watch Club twitter"/>
                                        </a>
                                    </div>

                                    <p style={{marginTop: "6px"}}>© 2021 CryptoBear Watch Club</p>
                                    {/* <!--<a href="javascript:;">CBWC Term & Condition</a> <br>
                                    <a href="javascript:;">CBWC Privacy Policy</a>--> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
