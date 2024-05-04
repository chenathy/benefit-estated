import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './NavBar';
import HomeComponent from './Home';
import LearnAboutComponent from './LearnAbout';
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
                <Route path='/learnAbout' element={<LearnAboutComponent/>} />
                <Route path='/contactUs' element={<ContactUsComponent/>} />
                <Route path='/employees' element={<EmployeesComponent/>} />
                <Route path='/employers' element={<EmployersComponent/>} />
                <Route path='/attorneys' element={<AttorneyComponent/>} />
            </Routes>
            
        </Router>
    )
}

export default MainPageComponent;
