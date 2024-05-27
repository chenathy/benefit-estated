import React from "react";
import { Button, Grid, Row, Col } from "rsuite";
import { useNavigate } from 'react-router-dom';
import "../ForComponent.css"
import homeLogo from "./Home.jpg";
import attorneyLogo from "./PowerOfAttorneys.jpg"
import estatePlanLogo from "./EstatePlanning.jpg"
import employerSponsoredLogo from "./EmployerSponsored.jpg"
import retainBenefitsLogo from "./retainBenefits.jpg"


const HomeComponent = () => {

    const navigate = useNavigate()

    return (
        <div className="Home">
            <Grid fluid>
                <Row>

                    <Row style={{marginTop: "5%", textAlign: "center"}}><h1>Bestated</h1></Row>

                    <div className="lander">
                        <Col xs={12} className="text-column">
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
                        
                        <Col xs={12} className="img-column">
                            <img 
                                src={homeLogo}
                                alt="Home"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Col>
                    </div>


                    <span className="section-name">Employers Sponsored Wills</span>
                    <div className="display">
                        <Col xs={12} className="text-column">
                            <div>
                                <h2>Bestated is the paradigm shifting platform for leading, innovative companies. </h2>
                                <h2>We are the first Employer-sponsored Will, POA, and Medical Directive Benefit platform.</h2>
                                <br/>
                                <p>Our platform connects your employees with our attorney partners so that your employees can be fully focused on their jobs/careers.</p>
                                <b>By adding this to your benefit, you will be able to attract and retain leading talent.</b>
                                <p>Our platform takes care of your employees: </p>
                                <ul>
                                    <li>Wills</li>
                                    <li>Estate Planning</li>
                                    <li>Power of Attorney</li>
                                    <li>Medical Directives</li>
                                </ul>
                                <Button 
                                        onClick={() => navigate("/contactUs")}
                                        className="button"
                                        >Sign Up Today
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} className="img-column">
                            <div className="img"> 
                                <img 
                                    src={employerSponsoredLogo}
                                    alt="Home"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div class="text-overlay">
                                    <h2>Bestated</h2>
                                    <p>Employers Sponsored Wills</p>
                                </div>
                            </div>
                        </Col>
                    </div>


                    <span className="section-name">Estate Planning</span>
                    <div className="display">
                        <Col xs={12} className="text-column">
                            <div>
                                <h2>Bestated will have your backs and do great work.</h2>
                                <p><b>Stressed out about Life Changes ?</b></p>
                                <p><b>Hard to focus on the day to day task of work ?</b></p> 
                            </div>
                            <Button 
                                onClick={() => navigate("/contactUs")}
                                className="button"
                                >Sign Up Today
                            </Button>
                        </Col>
                        <Col xs={12} className="img-column">
                            <div className="img"> 
                                <img 
                                    src={estatePlanLogo}
                                    alt="Home"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div class="text-overlay">
                                    <h2>Bestated</h2>
                                </div>
                            </div>
                        </Col>
                    </div>


                    <span className="section-name">Power of Attorneys</span>
                    <div className="display">
                        <Col xs={12} className="text-column">
                            <div>
                                <h2>Bestated Connects Attorneys with employees who have opted-in to this paradigm-shifting benefit.</h2>
                            
                            </div>
                            <Button 
                                onClick={() => navigate("/contactUs")}
                                className="button"
                                >Sign Up Today
                            </Button>
                        </Col>
                        <Col xs={12} className="img-column">
                            <div className="img"> 
                                <img 
                                    src={attorneyLogo}
                                    alt="Home"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div class="text-overlay">
                                    <h2>Bestated</h2>
                                    <p>Connections with Attorneys</p>
                                </div>
                            </div>
                        </Col>
                    </div>


                    <span className="section-name">Medical Directives</span>
                    <div className="display">
                        <Col xs={12} className="text-column">
                            <div>
                                <h2>Our jobs and careers work to provide great benefits packages to attract and retain us</h2>
                                <p>In life, unfortunate events happen. </p>
                                <p>Too many Americans, especially young Americans, 
                                    are ill-prepared if worse comes to worst and there is an unexpected death 
                                    or a substantial brain injury where employees are left in a dire circumstance.
                                </p>
                                <Button 
                                        onClick={() => navigate("/contactUs")}
                                        className="button"
                                        >Sign Up Today
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} className="img-column">
                            <div className="img">
                                <img 
                                    src={retainBenefitsLogo}
                                    alt="Home"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div class="text-overlay">
                                    <h2>Bestated</h2>
                                    <p>Greate Benefit Packages</p>
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