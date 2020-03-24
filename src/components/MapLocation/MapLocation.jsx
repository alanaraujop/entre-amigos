import React from 'react';
import './MapLocation.scss';

const MapLocation = props => {

  return (
    <div className="map-location">
      <div className="map-address">
        <h2 className="container">Onde estamos:</h2>
        <p className="container">Rua Paulo Barreto 64-A - Botafogo/Rj</p>
      </div>
      <iframe
        src={props.location}
        title="Localização do Entre Amigos Gastronomia"
        className="map-frame"
      />
    </div>
  );
};

export default MapLocation;
