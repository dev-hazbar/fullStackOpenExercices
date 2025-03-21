import { useState, useEffect } from 'react'
import axios from 'axios'
import Phonebook from './Phonebook/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  // [
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ]

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])




  return <Phonebook persons={persons} setPersons={setPersons} />
}

export default App


