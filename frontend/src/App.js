import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [testData, setTestData] = useState("");
  const [users, setUsers] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
      axios.get('http://localhost:4000')
      .then(response => {
        setTestData(response.data)
      });

      axios.get('http://localhost:4000/users')
      .then(response => {
        setUsers(response.data)
      });
  }

  const postData = (input) => {
    // const params = new URLSearchParams();
    let name = input.name
    let email = input.email
    // params.append('name', input.name);
    // params.append('email', input.email);
   
    axios.post('http://localhost:4000/users', null, { 
      params: {
        name,
        email
    }})
      .then(response => {
        getData()
       // alert(JSON.stringify(response))
        // setUsers(response.data)
      });
    // alert(JSON.stringify(input))
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
        <form onSubmit={(event) => event.preventDefault()}>
        <label>
          <input type="text" name="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
          <input type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </label>
        <input type="submit" value="Add new user" onClick={() => postData({"name": name, "email": email})} />
      </form>
        <nav>
        <ul>
            {users.map(u => (
            <li key={u.id}>{u.name}  [ {u.email} ]</li>
          ))}
        </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
