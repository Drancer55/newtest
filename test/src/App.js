import React from 'react';
import './App.css';
import Login from './login/Login';
import Point from './point/Point';

function App() {
  return (
    // Landing page
    <div className='container'>
      <section>
        <Login/>
      </section>
      <section>
        <Point/>
      </section>
    </div>
  );
}

export default App;
