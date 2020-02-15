import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Analytics } from "./components";
import {
  /* PLOP_ROUTE_IMPORT */
  Home,
  Contact
} from "./containers";
import FacebookPixel from "./components/FacebookPixel";

export default function Routes() {
  return (
    <BrowserRouter>
      <Analytics />
      <FacebookPixel />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
