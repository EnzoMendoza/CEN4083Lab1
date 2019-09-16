import React from 'react';
import './App.css';

var ip = require('ip');
var os = require( 'os' );

var networkInterfaces = os.networkInterfaces( );

console.log( networkInterfaces );
function App() {
  ip.address();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
        
      </header>
    </div>
    
  );
}

export default App;
