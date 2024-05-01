import React from "react";
import { Button, Grid, Row, Col } from "rsuite";
import '../ForComponent.css'


const HomeComponent = () => {
    return (
        <div className="Home">
            <Grid fluid>
                <Row className="show-grid">
                    <div className="lander">
                        
                        <Col>
                            <Row><h1>BeEstated LLC.</h1></Row>

                            <Row>
                                <h2>Employers Sponsored Wills</h2>
                                <h2>Estated Planning</h2>
                                <h2>Medical Directives</h2>
                                <h2>Power of Attorneys</h2>
                            </Row>

                            <Button 
                                className="button"
                                size="lg">Sign Up (today)
                            </Button>


                        </Col>
                        
                    
                        <Col>
                            <div className="lander">
                                <img 
                                    src='/Home.png' 
                                    alt='Home'
                                    style={{width: '150%', height: 'auto', marginTop: '5%', marginLeft: '10px', }}
                                />
                            </div>
                        </Col>
                    </div>
                </Row>
                
            </Grid>
      </div>
    )
}

export default HomeComponent;