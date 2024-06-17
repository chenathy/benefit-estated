import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import apiBaseUrl from '../config.js';
import Navbar from './NavBar';
import HomeComponent from './Home';
import AboutComponent from './About';
import EmployeesComponent from './ForEmployees';
import EmployersComponent from './ForEmoployers';
import AttorneyComponent from './ForAttorneys';
import ContactUsComponent from './ContactUs';


const MainPageComponent = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${apiBaseUrl}/api/endpoint`)
          .then(response => response.ok)
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {data ? (
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
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
        
};

export default MainPageComponent;
