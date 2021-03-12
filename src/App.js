import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from "./routes/PrivateRoutes";
import AppRoute from "./routes/AppRoute";
import AuthRoute from "./routes/AuthRoute";


const App = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoute} />
      <PrivateRoute path="/secure" component={AppRoute} />
      <Redirect to="/auth" from="/" />
    </Switch>
  );
}

export default App;
