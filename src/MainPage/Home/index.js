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
                </Row>
                
            </Grid>
      </div>
    )
}

export default HomeComponent;