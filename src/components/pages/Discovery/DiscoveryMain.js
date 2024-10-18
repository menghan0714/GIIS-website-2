import React from 'react';
import Nav from './DiscoveryHeader/Nav.js';

function DiscoveryMain({ language }) {
   return (
    <>
        <div className="row">
            <Nav language={language} />
        </div>
    </>
  );
}

export default DiscoveryMain;

