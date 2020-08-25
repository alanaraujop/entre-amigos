import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { 
  FacebookPixel, 
  GoogleAnalytics,
  Header,
  Footer,
} from './components';
import {
  Home,
  Menu,
  Contact,
  Gallery,
  Events
} from "./views";

export default function Routes() {

  return (
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <GoogleAnalytics />
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
