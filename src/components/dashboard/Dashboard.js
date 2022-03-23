import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from 'react-router';
import SideNav from './sideNav/SideNav';
// import ProtectedRoute from '../../utils/ProtectedRoute';
import Team from './teamPage/Team';

const Admin = () => {
    return (
        <div className="row g-0 ">
            <SideNav />
            <Team />
            {/* <Router>
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/dashboard/users"
                        component={Team}
                        //isAuth={isAuth}
                    />
                </Switch>
            </Router> */}
        </div>
    );
};

export default Admin;
