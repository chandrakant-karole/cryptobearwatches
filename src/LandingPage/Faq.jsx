import React from 'react'
import { Accordion, Container, Row } from 'react-bootstrap'

export default function Faq() {
    return (
        <>
            <div className="faqDiv" id="faq">
                <Container>
                    <Row>
                        <h2 className="text-center my-4">FAQ (Frequently Asked Questions)</h2>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is the total supply?</Accordion.Header>
                                <Accordion.Body>
                                    10,000 unique CryptoBear collectibles will be available for minting.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>When is the launch?</Accordion.Header>
                                <Accordion.Body>
                                    The public mint will start on XX XXXXXX and Xxxxxxxxxx.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How much does it cost to mint an NFT?</Accordion.Header>
                                <Accordion.Body>
                                    It will be a Dutch auction starting at 3.3 Eth and decreasing by X every 5 minutes to a floor of 0.XX. Buying 5+ NFTs during the public auction in the initial 200 mints qualifies members into a draw to win a limited edition watch worth over USD 60,000.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Where are the NFTs located?</Accordion.Header>
                                <Accordion.Body>
                                    CryptoBear Watch Club NFTs are housed exclusively on the Ethereum Blockchain.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Do I get full rights to my NFT?</Accordion.Header>
                                <Accordion.Body>
                                    CryptoBear Watch Club grants you full creative and commercial rights for the pieces you own. Utilise them as you wish and make the most of your collectibles.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </Container>
            </div>
        </>
    )
}
