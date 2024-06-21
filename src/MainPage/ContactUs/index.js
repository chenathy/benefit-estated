import React, { useState } from "react";
import { Grid, Row, Col, Button, Input } from "rsuite";
import contactLogo from './contact.png';
import beneficiariesLogo from './money.png';
import emailLogo from './email.png';
import buildingLogo from './building.png';
import assetsLogo from './assets.png';
import phoneLogo from './phone.png';
import stateRegionLogo from './state.png';
import cooperationLogo from './cooperation.png'


const ContactUsComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        state: '',
        beneficiaries: '',
        assets: 0
    });

    const handleChange = (value, event) => {

        const {name} = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/submit`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Your Info has been submitted successfully!');
            } else {
                alert('Failed to submit data.');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('An error occurred while submitting data.');
        }
    };

    return (
        <div className="ContactUs">
            <Grid>
                <Row style={{marginTop: '5%'}}>
                    <h1>Contact Us</h1>
                </Row>
                <Row className="row">
                    <Col>
                        <Row className="row">
                            <img
                                src={contactLogo}
                                alt="Contact"
                                className="icon"
                            />
                            <Input name="firstName" value={formData.firstName} placeholder="First Name" className="input" onChange={handleChange} style={{width: '200px'}}/>
                            <Input name="lastName" value={formData.lastName} placeholder="Last Name" className="input" onChange={handleChange} style={{width: '200px'}}/>
                        </Row>
                        <Row className="row">
                            <img
                                src={buildingLogo}
                                alt="Company"
                                className="icon"
                            />
                            <Input name="companyName" value={formData.companyName} placeholder="Company Name" className="input" onChange={handleChange}/>
                        </Row>
                        <Row className="row">
                            <img
                                src={emailLogo}
                                alt="Email"
                                className="icon"
                            />
                            <Input name="email" value={formData.email} placeholder="Email" className="input" onChange={handleChange}/>
                        </Row>
                        <Row className="row">
                            <img
                                src={phoneLogo}
                                alt="Phone"
                                className="icon"
                            />
                            <Input name="phone" value={formData.phone} placeholder="Phone" className="input" onChange={handleChange}/>
                        </Row>
                        <Row className="row">
                            <img
                                src={stateRegionLogo}
                                alt="StateRegion"
                                className="icon"
                            />
                            <Input name="state" value={formData.state} placeholder="State" className="input" onChange={handleChange}/>
                        </Row>
                        <Row className="row">
                            <img 
                                src={beneficiariesLogo}
                                alt="Beneficiaries"
                                className="icon"
                            />
                            <Input name="beneficiaries" value={formData.beneficiaries} placeholder="Beneficiaries" className="input" onChange={handleChange}/>
                        </Row>
                        <Row className="row">
                            <img 
                                src={assetsLogo}
                                alt="Assets"
                                className="icon"
                            />
                            <Input name="assets" value={formData.assets} placeholder="Assets" className="input" onChange={handleChange}/>
                        </Row>
                    </Col>
                    <Col style={{marginTop: "2%"}}>
                        <img
                            src={cooperationLogo}
                            alt="Cooperation"
                            className="image"
                        />
                        <p><b>Looking to connect with the Bestated team?</b></p>
                        <p>Please send us your contact information, and someone from our team will be in touch with you soon!</p>
                        <Button className="button" onClick={handleSubmit}>Submit</Button>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default ContactUsComponent;

