import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')  // moderization of APIs
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Full stack with Dipu</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => 
          <div key={joke.id}>
            <h3>{joke.id} : {joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        )
      }
    </>
  )
}

export default App
