import React from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';

import './App.css';
let cytoscapeDataConfig = require('./data.json')

function App() {
  const elements = cytoscapeDataConfig.data;
  return (


    <div className="App">
      <CytoscapeComponent elements={elements} style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
}

export default App;
