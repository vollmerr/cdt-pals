import React from 'react';

const Version = () => (
  <div id={'pal__version'}>
    v
    {process.env.REACT_APP_VERSION}
  </div>
);

export default Version;
