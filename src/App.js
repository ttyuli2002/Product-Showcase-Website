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
              image="https://github.com/ttyuli2002/Product-Showcase-Website/blob/main/my-app/src/download.jpg" // Replace with your actual image URL
            />
          </div>
      </header>
    </div>
  );
}

export default App;
