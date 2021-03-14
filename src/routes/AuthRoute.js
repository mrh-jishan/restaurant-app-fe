import React from "react";
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import { Collaborate, Login, Register } from "../pages";

const AuthRoute = ({ auth }) => {
    const { isLoggedIn, isloading } = auth;

    if (isloading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    console.log('isLoggedin', isLoggedIn);
    if (isLoggedIn) {
        return (
            <Switch>
                <Redirect to="/secure/home" from="/auth" />
            </Switch>)
    }
    return (
        <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Route path="/auth/collaborate/:token" component={Collaborate} />
            <Redirect to="/auth/login" from="/auth" />
        </Switch>
    );
};



const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps, null)(AuthRoute);;
