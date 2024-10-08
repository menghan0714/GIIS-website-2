import React from 'react';
import DiscoveryHeader from './Header/Header'; 
import DiscoveryMain from './Main/Main';     
import DiscoveryFooter from './Footer/Footer'; 

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

