import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './NavBar';
import HomeComponent from './Home';
import EmployeesComponent from './ForEmployees';
import EmployersComponent from './ForEmoployers';
import AttorneyComponent from './ForAttorneys';


const MainPageComponent = () => {
    return (
        <Router>

            <Navbar />
            
            <Routes>
                <Route path='/' element={<HomeComponent/>} />
                <Route path='/employees' element={<EmployeesComponent/>} />
                <Route path='/employers' element={<EmployersComponent/>} />
                <Route path='/attorneys' element={<AttorneyComponent/>} />
            </Routes>
            
        </Router>
    )
}

export default MainPageComponent;
