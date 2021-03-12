import React from "react";
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, auth, ...rest }) => {
    const { isLoggedIn, isloading } = auth;

    if (isloading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={routeProps =>
                isLoggedIn ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={{ pathname: "/auth/login", state: { prevPath: rest.path } }} />
                )
            }
        />
    );
}

const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps, null)(PrivateRoute);;
