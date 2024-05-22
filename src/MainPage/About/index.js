import React from "react";
import { Grid, Col, Row, Button } from "rsuite";
import { useNavigate } from "react-router-dom";
import AboutLogo1 from './benefit(1).png';
import AboutLogo2 from './benefit(2).png';
import AboutLogo3 from './benefit(3).png';
import AboutLogo4 from './benefit(4).png';


const AboutComponent = () => {

    const navigate = useNavigate()

    return (
        <div className="About">
            <Grid fluid>
                <Row style={{marginTop: '5%'}}>
                    <h1>Bestated</h1>
                </Row>
                <Row className="row">
                    <Col className="col">
                        <img
                            src={AboutLogo1}
                            alt="About1"
                            className="image"
                        />
                        <p>Bestated is a 2 side marketplace as part of employee benefits and employee onboarding.</p>
                    </Col>
                    <Col className="col">
                        <img
                            src={AboutLogo2}
                            alt="About2"
                            className="image"
                        />
                        <p>Employer sponsored estate plans - wills, power of attorney, and medical directives.</p>  
                    </Col>
                    <Col className="col">
                        <img
                            src={AboutLogo3}
                            alt="About3"
                            className="image"
                        />
                        <p>Attorney partners pay a monthly subscription to be a part of the Bestated platform to help establish wills, 
                            power of attorney and medical directives for employees
                        </p>
                    </Col>
                    <Col className="col">
                        <img
                            src={AboutLogo4}
                            alt="About4"
                            className="image"
                        />
                        <p>Employers will help employees and their families' get a written plan established in case worse comes to worst</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>.   .   .</h3>
                    </Col> 
                    <Col>
                        <h3>All to avoid probate</h3>
                    </Col>
                </Row>
                <Row>
                    <Button 
                        className="button"
                        onClick={() => navigate("/contactUs")}
                    >Sign Up Today</Button>
                </Row>
            </Grid>
        </div>
    )
}

export default AboutComponent;