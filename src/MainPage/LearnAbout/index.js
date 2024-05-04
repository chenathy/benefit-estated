import React from "react";
import { Grid, Col, Row, Button } from "rsuite";
import LearnLogo1 from './benefit(1).png';
import LearnLogo2 from './benefit(2).png';
import LearnLogo3 from './benefit(3).png';
import LearnLogo4 from './benefit(4).png';


const LearnAboutComponent = () => {
    return (
        <div className="LearnAbout">
            <Grid fluid>
                <Row style={{marginTop: '5%'}}>
                    <h1>Benefit Estated</h1>
                </Row>
                <Row className="row">
                    <Col className="col">
                        <img
                            src={LearnLogo1}
                            alt="LearnAbout1"
                            className="image"
                        />
                        <p>2 sided marketplace place offering estate planning services as part of employee benefits</p>
                    </Col>
                    <Col className="col">
                        <img
                            src={LearnLogo2}
                            alt="LearnAbout2"
                            className="image"
                        />
                        <p>Employer sponsored estate plans - wills, power of attorney, medical directives</p>   
                    </Col>
                    <Col className="col">
                        <img
                            src={LearnLogo3}
                            alt="LearnAbout3"
                            className="image"
                        />
                        <p>Attorneys in all 50 states paying a monthly subscription to estate, inc → $1,999/mo</p>
                    </Col>
                    <Col className="col">
                        <img
                            src={LearnLogo4}
                            alt="LearnAbout4"
                            className="image"
                        />
                        <p>Employers paying $1,000 + for each employee</p>
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
                    <Button className="button">Sign Up (Today)</Button>
                </Row>
            </Grid>
        </div>
    )
}

export default LearnAboutComponent;