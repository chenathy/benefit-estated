import React from 'react';
import {Grid, Row, Col} from 'rsuite';
import '../ForComponent.css';
import employeeLogo from './forEmployees.png'


const EmployeesComponent = () => {
    return (
        <div className='Employees'>
            <Grid>
                <div className='lander'>
                    <Row>
                        <Col>
                            <h1>For Employees</h1>
                        </Col>
                    </Row>
                </div>
                
                <Row className='show-grid'>
                    <div className='lander'>
                        <Col>
                            <img 
                                src={employeeLogo}
                                alt='Employees'
                                style={{ width: '90%', height: 'auto' }}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    Our jobs are supposed to have our backs. They want us to do great work. 
                                    However, sometimes it’s hard to focus on the day to day tasks of our work when we’re stressed out about life changes.
                                </p>
                                
                                <p>
                                    Our jobs work to provide great benefits packages to attract and retain us: health insurance, 401ks, maternal/paternal benefits, 
                                    education reimbursements, short term, long term disability coverage,  life insurance policies… but they stop short of covering us and our families  with a plan if the unfortunate happens….
                                </p>

                                <p>
                                    That’s where Bestated comes in to help. By being the first employer-sponsored will, poa, and medical directive benefit for the leading companies. 
                                    With our platform, employees will be better taken care of, and can rest assured that their assets, and decision making will be taken care of, if the unfortunate happens. 
                                </p>

                                <p>
                                    Bestated works to connect attorneys with employees who have opted-in to this paradigm-shifting benefit. 
                                    Soon, all leading companies will couple estate plans with their life insurance policies, 
                                    <b> Bestated is looking to pioneer this benefits package change.</b>
                                </p>
                            </Row>
                        </Col>
                    </div>

                </Row>

            </Grid>

      </div>
    )
}

export default EmployeesComponent;

