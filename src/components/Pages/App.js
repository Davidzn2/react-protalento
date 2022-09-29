import React, { useState } from 'react'
import Home from '../Home';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header'

function App() {
  const [name, setName] = useState('CR7')
  const [data, setData] = useState([
    { id: 1, nameData: "John Doe" },
    { id: 2, nameData: "Victor Wayne" },
    { id: 3, nameData: "Jane Doe" },
  ])

  return (
    <div className="App">
      <Header />
      <Home nombre={name} />
      {data.map((user) => (
        <div className="user">{user.nameData}</div>
      ))}
      <Link to="/gatito">Ir a pagina de gatitos</Link>
    </div>

  );
}

export default App;
