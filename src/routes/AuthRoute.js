import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login, Register } from "../pages";

const AuthRoute = () => {
    return (
        <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Redirect to="/auth/login" from="/auth" />
        </Switch>
    );
};

export default AuthRoute;
