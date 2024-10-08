import React from 'react';
import DiscoveryHeader from './Header'; 
import DiscoveryMain from './Main';     
import DiscoveryFooter from './Footer'; 

function Discovery({ language }) {
  return (
    <div>
      <DiscoveryHeader language={language} />
      <DiscoveryMain language={language} />
      <DiscoveryFooter language={language} />
    </div>
  );
}

export default Discovery;

