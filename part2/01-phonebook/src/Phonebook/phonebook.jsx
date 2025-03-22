import { useState } from 'react'
import phonebookService from '../services/phonebook'


const Title2  = ({name}) => <h2>{name}</h2>

const Filter = ({inputValue, onChange}) => {
  return (
    <div>
      Filter shown with <input value={inputValue} onChange={onChange} />
    </div>
  )
}

const ShowPhonebook = ({personsState, filter}) => {

  const persons = personsState.persons
  // const setPersons = personsState.setPersons

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {filteredPersons.map(
        person => {
          return (
            
            <ShowPerson key={person.id} person={person} personsState={personsState}/>
            
          )
        }
      )}
    </div>
  )
}

const ShowPerson = ({person, personsState}) => {

  const deleteContact = (event) => {
    event.preventDefault()

    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService
        .deleteContact(person.id)
        .then(response => {
          console.log(response)
          personsState.setPersons(personsState.persons
            .filter(person => person.id !== response.data.id)
          )
        })
        .catch(error => {
          console.log(error)
        })
    }
  }


  return (
    <p>
      {person.name} {person.number}
      <button onClick={deleteContact}>delete</button>
      {/* <button onClick={editContact}>edit</button> */}
    </p>
  )
}




const PersonForm = ({personsState}) => {

  const persons = personsState.persons
  const setPersons = personsState.setPersons

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addNewContact = (event) => {
    event.preventDefault()

    if (newName === '') return

    const newNameLow = newName.toLowerCase()
    const existingPerson = persons.filter(person => person.name.toLowerCase() === newNameLow)

    if(existingPerson.length > 0){

      phonebookService
      .update(existingPerson[0].id, {name: newName, number: newNumber})
      .then(response => {
        console.log(response)
        setPersons(persons.map(person => person.id !== response.data.id ? person : response.data))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log(error)
      })

      return
    }

    let noteObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }

    phonebookService
      .create(noteObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.error)
      })

  }


  return (
    <div>
      <form>
        <div>name: <input value={newName} onChange={handleNoteChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button onClick={addNewContact}>add</button></div>
      </form>
    </div>
  )
}



const Phonebook = ({personsState}) => {

    const [filterText, setFilterText] = useState('')

    const handleFilterChange = (event) => {
      console.log(event.target.value)
      setFilterText(event.target.value)
    }

    return (
        <div>
        <Title2 name="Phonebook" />
        <Filter inputValue={filterText} onChange={handleFilterChange} />

        <Title2 name="Add a new" />
        <PersonForm personsState={personsState}  />

        <Title2 name="Numbers" />
        <ShowPhonebook personsState={personsState}  filter={filterText}/>
        </div>
    )
}



export default Phonebook
