import { useState, useEffect } from 'react'
import Phonebook from './Phonebook/phonebook'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const personsState = { persons, setPersons}
  // [
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ]

  useEffect(() => {
    console.log('effect')
    phonebookService
      .getAll('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])




  return <Phonebook personsState={personsState} />
}

export default App
