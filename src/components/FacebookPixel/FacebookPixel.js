import ReactPixel from 'react-facebook-pixel';

const options = {
  autoconfig: true,
  debug: false
};

ReactPixel.init('219621429066035', options);
ReactPixel.pageView();
