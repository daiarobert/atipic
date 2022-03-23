import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from './Common';

function ProtectedRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                getToken() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    );
}

export default ProtectedRoute;
