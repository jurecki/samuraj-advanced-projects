import React from 'react';
import './App.css';
import Animated from './Animated';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <div className="ballon-animation">
        <Animated 
          className='cloud'
          src='/cloud.png'
          ratioX="0.36"
          ratioY="0.34"
        />
           <Animated 
          className='cloud'
          src='/cloud.png'
          ratioX="0.13"
          ratioY="0.53"
        />
           <Animated 
          className='cloud'
          src='/cloud.png'
          ratioX="0.1"
          ratioY="0.11"
        />
           <Animated 
          className='cloud'
          src='/cloud.png'
          ratioX="0.26"
          ratioY="0.24"
        />
           <Animated 
          className='cloud'
          src='/baloon.png'
          ratioX="0.03"
          ratioY="0.04"
        />
        </div>
       
       
      </header>
    </div>
  );
}

export default App;
