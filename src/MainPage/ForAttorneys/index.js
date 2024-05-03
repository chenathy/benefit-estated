import React from 'react';
import {Button, Grid, Row, Col} from 'rsuite';
import '../ForComponent.css';
import attorneyLogo from './forAttorneys.png';

const AttorneyComponent = () => {
    return (
        <div className='Attorneys'>
            <Grid>
                <div className='lander'>
                    <h1>For Attorneys</h1>
                </div>
                <Row className='show-grid'>
                    <div className='lander'>
                        <Col>
                            <img 
                                src={attorneyLogo} 
                                alt='Attorneys'
                                style={{width: '75%', height: 'auto'}}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <p>
                                    Bestated is going to be the platform that shifts the paradigm of individuals going out and filing the paperwork for a will, poa, and medical directive. 
                                </p>
                                <p>
                                    We’re going to need your help establishing these documents. Get in contact with our team to become a part of paradigm shift platform, Bestated. 
                                </p>
                            </Row>
                        </Col>
                    </div>
                </Row>
            </Grid>

      </div>
    )
}

export default AttorneyComponent;