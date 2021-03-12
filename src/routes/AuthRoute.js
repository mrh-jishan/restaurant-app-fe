import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import history from "../history";
import { Login, Register } from "../pages";

const AuthRoute = () => {
    const { authenticated } = useContext(AuthContext);

    useEffect(() => {
        if (authenticated) {
            history.push('/secure/home')
        }
    }, [authenticated])

    return (
        <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Redirect to="/auth/login" from="/auth" />
        </Switch>
    );
};

export default AuthRoute;
