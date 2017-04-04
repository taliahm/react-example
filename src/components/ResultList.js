import React from 'react';

import Gif from './Gif';

const ResultList = (props) => {
  const gifs = props.gifs.map((gif, index) => {
    return (<Gif key={`${gif.id}${index}`} src={gif.images.looping.mp4} />);
  });
  return (
    <section className="section">
      <div className="container gif-container">
        {gifs}
      </div>
      <a className="button" href="" onClick={ (e) => props.loadMore(e) }>Load More </a>
    </section>
  );
}

export default ResultList;