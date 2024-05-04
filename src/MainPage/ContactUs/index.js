import React from "react";
import { Grid, Row, Col, Button, Input } from "rsuite";
import contactLogo from './contact.png';
import emailLogo from './email.png';
import buildingLogo from './building.png';
import phoneLogo from './phone.png';
import regionLogo from './region.png';


const ContactUsComponent = () => {
    return (
        <div className="ContactUs">
            <Grid>
                <Row>
                    <h2>Contact Us</h2>
                </Row>
                <Row className="row">
                    <Col>
                        <Row className="row">
                            <img
                                src={contactLogo}
                                alt="Contact"
                                className="icon"
                            />
                            <Input placeholder="First Name" className="input" style={{width: '200px'}}/>
                            <Input placeholder="Last Name" className="input" style={{width: '200px'}}/>
                        </Row>
                        <Row className="row">
                            <img
                                src={buildingLogo}
                                alt="Company"
                                className="icon"
                            />
                            <Input placeholder="Company Name" className="input"/>
                        </Row>
                        <Row className="row">
                            <img
                                src={emailLogo}
                                alt="Email"
                                className="icon"
                            />
                            <Input placeholder="Email" className="input"/>
                        </Row>
                        <Row className="row">
                            <img
                                src={phoneLogo}
                                alt="Phone"
                                className="icon"
                            />
                            <Input placeholder="Phone" className="input"/>
                        </Row>
                        <Row className="row">
                            <img
                                src={regionLogo}
                                alt="Region"
                                className="icon"
                            />
                            <Input placeholder="Region" className="input"/>
                        </Row>
                    </Col>
                    <Col style={{marginTop: "20px"}}>
                        <p>Looking to Connect Bestated ?</p>
                        <p>Leave your contact Info, we will reach out to you very soon !</p>
                        <Button className="button"> Sign Up (Today)</Button>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default ContactUsComponent;

