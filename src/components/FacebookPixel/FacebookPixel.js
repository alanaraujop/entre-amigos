import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import ReactPixel from 'react-facebook-pixel';
 
const options = {
  autoConfig: true,
  debug: false,
};

const FacebookPixel = props => {
  useEffect(() => {
    ReactPixel.init('219621429066035', options);

  }, []);

  useEffect(() => {
    ReactPixel.pageView(props.location.pathname);
    console.log("here fp");
  }, [props.location.pathname]);

  return <div/>;
};

export default withRouter(FacebookPixel);
