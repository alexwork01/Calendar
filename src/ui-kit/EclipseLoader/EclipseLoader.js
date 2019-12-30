import React from 'react';

export const EclipseLoader = ({
  width = '100px',
  height = '100px',
  color = '#3885d0'
}) => {
  return (
    <svg
      version="1.1"
      style={{
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto'
      }}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        fill={color}
        stroke="none"
        transform="rotate(153.991 50 51)"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        />
      </path>
    </svg>
  );
};
