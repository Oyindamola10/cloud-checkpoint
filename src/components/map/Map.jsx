import React from 'react'

const Map= () => {
  

  return (
   
    <div>
      <p>
        <iframe
          id="map-canvas"
          className="map_part"
          width="600"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Surulere, Lagos, Nigeria&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          Powered by{" "}
          <a href="https://www.googlemapsgenerator.com">
            html embed google maps
          </a>{" "}
          and{" "}
          <a href="https://xn--samla-ln-utan-uc-job.se/">samla lån utan uc</a>
        </iframe>
      </p>
    </div>
  );
};

export default Map;