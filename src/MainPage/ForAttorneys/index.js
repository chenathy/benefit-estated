import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import '../ForComponent.css';
import attorneyLogo from './forAttorneys.png';

const AttorneyComponent = () => {
    return (
        <div className='Attorneys'>
            <Grid>
                <h1>For Attorneys</h1>
                <Row className='show-grid'>
                    <div className='lander'>
                        <Col>
                            <img 
                                src={attorneyLogo} 
                                alt='Attorneys'
                                className='image'
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