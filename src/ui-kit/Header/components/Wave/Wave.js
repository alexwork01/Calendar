import React from 'react';
import { BackgroundSvg } from './styled';

export const BackgroundWave = () => (
  <BackgroundSvg>
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 240 24"
      enableBackground="new 0 0 240 24"
      xmlSpace="preserve"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        fillOpacity="0.33"
        d="M240,24V0c-51.797,0-69.883,13.18-94.707,15.59c-24.691,2.4-43.872-1.17-63.765-1.08c-19.17,0.1-31.196,3.65-51.309,6.58C15.552,23.21,4.321,22.471,0,22.01V24H240z"
      />
      <path
        fill="#ffffff"
        fillOpacity="0.33"
        d="M240,24V2.21c-51.797,0-69.883,11.96-94.707,14.16
                    c-24.691,2.149-43.872-1.08-63.765-1.021c-19.17,0.069-31.196,3.311-51.309,5.971C15.552,23.23,4.321,22.58,0,22.189V24h239.766H240
                    z"
      />
      <path
        fill="#ffffff"
        d="M240,24V3.72c-51.797,0-69.883,11.64-94.707,14.021c-24.691,2.359-43.872-3.25-63.765-3.17
                    c-19.17,0.109-31.196,3.6-51.309,6.529C15.552,23.209,4.321,22.47,0,22.029V24H240z"
      />
    </svg>
  </BackgroundSvg>
);
