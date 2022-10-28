import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [testData, setTestData] = useState("");

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
      axios.get('http://localhost:4000')
      .then(response => {
        setTestData(response.data)
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {testData}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
