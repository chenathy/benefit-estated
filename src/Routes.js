import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import EmployeesComponent from "./MainPage/ForEmployee";
import HomeComponent from "./MainPage/Home";


// export default class Routes extends Component {
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/employees" component={EmployeesComponent} />
                {/* <Route path="/Contact" component={Contact} />
                <Route path="/Products" component={Products} /> */}
            </Switch>
        </Router>
    )
}

export default Routes;