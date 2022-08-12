import React from 'react';
import './App.css';
import Login from './login/Login';
import Point from './point/Point';

function App() {
  return (
    <div className='container'>
      <aside>
        <Login/>
      </aside>
      <section>
        <Point/>
      </section>
    </div>
  );
}

export default App;
