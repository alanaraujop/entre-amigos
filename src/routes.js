import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Analytics } from "./components";
import {
  /* PLOP_ROUTE_IMPORT */
  Home,
  Menu,
  Contact,
  Gallery,
  Events
} from "./containers";
import FacebookPixel from "./components/FacebookPixel";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Analytics />
      <FacebookPixel />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nossos-pratos" component={Menu} />
        <Route exact path="/galeria" component={Gallery} />
        <Route exact path="/eventos" component={Events} />
        <Route exact path="/contato" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
