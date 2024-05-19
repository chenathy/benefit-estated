import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './NavBar';
import HomeComponent from './Home';
import AboutComponent from './About';
import EmployeesComponent from './ForEmployees';
import EmployersComponent from './ForEmoployers';
import AttorneyComponent from './ForAttorneys';
import ContactUsComponent from './ContactUs';


const MainPageComponent = () => {
    return (
        <Router>

            <Navbar />
            
            <Routes>
                <Route path='/' element={<HomeComponent/>} />
                <Route path='/about' element={<AboutComponent/>} />
                <Route path='/contactUs' element={<ContactUsComponent/>} />
                <Route path='/employees' element={<EmployeesComponent/>} />
                <Route path='/employers' element={<EmployersComponent/>} />
                <Route path='/attorneys' element={<AttorneyComponent/>} />                
                <Route path='/benefit-estated' element={<HomeComponent/>} /> 
            </Routes>
            
        </Router>
    )
}

export default MainPageComponent;
