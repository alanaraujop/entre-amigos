import React from 'react';
import { Iframe } from './styles';

const MapLocation = props => {

  return (
    <Iframe>
      <div className="map-address">
        <h2 className="container">Onde estamos:</h2>
        <p className="container">Rua Paulo Barreto 64-A - Botafogo/Rj</p>
      </div>
      <iframe
        src={props.location}
        title="Localização do Entre Amigos Gastronomia"
        className="map-frame"
      />
    </Iframe>
  );
};

export default MapLocation;
