import React from "react";
import { Grid, Row, Col } from "rsuite";
import '../ForComponent.css';
import employersLogo from './forEmployers.png'


const EmployersComponent = () => {
    return (
        <div className="Employers">
            <Grid> 
                <h1>For Employers</h1>
                <Row className="show-grid">
                    <div className="lander">
                        <Col>
                            <img 
                                src={employersLogo} 
                                alt='employers'
                                className='image'
                            />
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    Your HR and People department looks to be competitive in the dynamic employee marketplace. 
                                    You offer leading compensation and benefits. 
                                </p>
                                <p>
                                    However, according to a 2022 CNBC <a href="https://www.cnbc.com/2022/04/11/67percent-of-americans-have-no-estate-plan-heres-how-to-get-started-on-one.html#:~:text=and%20the%20Advisor-,67%25%20of%20Americans%20have%20no%20estate%20plan%2C%20survey%20finds.,to%20get%20started%20on%20one&text=Covid%2D19%20has%20increased%20Americans,Americans%20have%20established%20estate%20plans." target="_blank" rel="noreferrer">article</a>, 
                                    67% of Americans, don’t have a will! It’s probably closer to 75-80% if you remove the Baby Boomers too! 
                                    There is research which show that with 401ks, companies that opt employees in by default, leads to a <b>significantly higher enrollment in their 401k plans.</b> 
                                </p>
                                <p>
                                    Bestated, wants to apply this same logic to wills, POAs, and medical directives.
                                </p>
                                <p>
                                    In time, we will all look back and wonder why companies gave employees a life insurance policy, 
                                    but not a platform to establish a plan for what to do with that life insurance plan, and the other assets that the employee owns if the unfortunate happens…
                                </p>
                            </Row>
                        </Col>
                    </div>
                </Row>

            </Grid>
                

        </div>

    )
}

export default EmployersComponent;