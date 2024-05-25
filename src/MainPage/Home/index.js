import React from "react";
import { Button, Grid, Row, Col } from "rsuite";
import { useNavigate } from 'react-router-dom';
import "../ForComponent.css"
import homeLogo from "./Home.png";


const HomeComponent = () => {

    const navigate = useNavigate()

    return (
        <div className="Home">
            <Grid fluid>
                <Row>

                    <Row style={{marginTop: "5%"}}><h1>Bestated</h1></Row>
                    <div className="lander">
                        <Col>
                            <Row>
                                <h2>Employers Sponsored Wills</h2>
                                <h2>Estated Planning</h2>
                                <h2>Medical Directives</h2>
                                <h2>Power of Attorneys</h2>
                            </Row>

                            <Button 
                                className="button"
                                size="lg"
                                onClick={() => navigate("/contactUs")}
                                >Sign Up Today
                            </Button>
                        </Col>
                        
                        <Col>
                            <img 
                                src={homeLogo}
                                alt="Home"
                                className="image"
                            />
                        </Col>
                    </div>

                    <div className="display">
                        <Col xs={12} className="text-column">
                            <div>
                                <h2>Our jobs work to provide great benefits packages to attract and retain us</h2>
                                <b>If life unfortunate events happen ...</b>
                                <p>Employers could stop covering you and our families with a plan</p>
                                <ul>
                                    <li>Health Insurance</li>
                                    <li>401ks</li>
                                    <li>Maternal/Paternal Benefits</li>
                                    <li>Education Reimbursements</li>
                                    <li>Short Term, Long Term Disability Coverage</li>
                                    <li>Life Insurance Policies</li>
                                    <li>etc ...</li>
                                </ul>
                                <Button 
                                        size="lg"
                                        onClick={() => navigate("/contactUs")}
                                        className="button"
                                        style={{marginLeft: '20%'}}
                                        >Sign Up Today
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} className="img-column">
                            <div className="img">
                                <img 
                                    src={homeLogo}
                                    alt="Home"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div class="text-overlay">
                                    <h2>Bestated</h2>
                                    <p>You can add any text you want here</p>
                                </div>
                            </div>
                        </Col> 
                    </div>

                    <div className="display">
                        <Col xs={12} className="text-column">
                            <div>
                                <h2>First Employer-Sponsored Will, POA, and Medical Directive Benefit for Leading Companies</h2>
                                <b>If life unfortunate events happen ...</b>
                                <p>Our platform takes care of: </p>
                                <ul>
                                    <li>Employees</li>
                                    <li>Assets</li>
                                    <li>Decision Making</li>
                                    <li>etc...</li>
                                </ul>
                                <Button 
                                        size="lg"
                                        onClick={() => navigate("/contactUs")}
                                        className="button"
                                        style={{marginLeft: '20%'}}
                                        >Sign Up Today
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} className="img-column">
                            <div className="img"> 
                                <img 
                                    src={homeLogo}
                                    alt="Home"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div class="text-overlay">
                                    <h2>Bestated</h2>
                                    <p>You can add any text you want here</p>
                                </div>
                            </div>
                        </Col>
                    </div>

                    <div className="display">
                        <Col xs={12} className="text-column">
                            <div>
                                <h2>Bestated will have your backs and do great work.</h2>
                                <p><b>Stressed out about Life Changes ?</b></p>
                                <p><b>Hard to focus on the day to day task of work ?</b></p> 
                            </div>
                            <Button 
                                size="lg"
                                onClick={() => navigate("/contactUs")}
                                className="button"
                                style={{marginLeft: '20%'}}
                                >Sign Up Today
                            </Button>
                        </Col>
                        <Col xs={12} className="img-column">
                            <div className="img"> 
                                <img 
                                    src={homeLogo}
                                    alt="Home"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div class="text-overlay">
                                    <h2>Bestated</h2>
                                    <p>You can add any text you want here</p>
                                </div>
                            </div>
                        </Col>

                    </div>

                </Row>
                
            </Grid>
      </div>
    )
}

export default HomeComponent;