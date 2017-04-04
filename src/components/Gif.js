import React from 'react';

const Gif = (props) => {
  return (
      <figure className="gif">
        <video src={props.src} autoPlay />
      </figure>
  );
};

export default Gif;
