import React, { useEffect } from 'react';

function WisataAlam() {
  useEffect(() => {
    async function loadMap() {
      const google = window.google;
      const { Map } = await google.maps.importLibrary('maps');
      const map = new Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }

    loadMap();

    return () => {
    };
  }, []);

  return (
    <div>
      <h2>Wisata Alam</h2>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
      {/* You can adjust the height and width of the map div as needed */}
    </div>
  );
}

export default WisataAlam;
