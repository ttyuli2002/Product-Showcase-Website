import React from 'react';
import './App.css';
import Navbar from './Navbar';
import InfoBlock from './Infoblock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <h2>智能驾驶</h2>
          <div className = "blocks">
            <InfoBlock
              title="Technology"
              content="This is our product"
              image="download.jpg" // Replace with your actual image URL
            />
          </div>
      </header>
    </div>
  );
}

export default App;
