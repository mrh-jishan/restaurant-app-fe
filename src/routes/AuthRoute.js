import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import history from "../history";
import Login from "../pages/Login";


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
            <Redirect to="/auth/login" from="/auth" />
        </Switch>
    );
};

export default AuthRoute;
