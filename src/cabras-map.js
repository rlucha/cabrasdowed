import React from 'react';

const CdwMap = props => (
  <div className="cdw-map">
    <div className="cdw-map-title">Cómo llegar</div>
    <div className="cdw-map-subtitle">Haz click en la imagen para ir a Google Maps</div>

    <a href="https://www.google.es/maps/place/BARRACA+EL+PALMAR/@39.3766745,-0.4179471,12z/"> 
      <img className="cdw-map-img" src="assets/mapa.jpg" />
    </a>
    
    
  </div>
);

export { CdwMap };
