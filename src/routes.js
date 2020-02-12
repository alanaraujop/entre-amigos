import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Analytics } from "./components";
import {
  /* PLOP_ROUTE_IMPORT */
  Home
} from "./containers";

export default function Routes() {
  return (
    <BrowserRouter>
      <Analytics />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
