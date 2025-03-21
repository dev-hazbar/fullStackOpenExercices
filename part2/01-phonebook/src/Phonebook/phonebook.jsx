import { useState } from 'react'

const Title2  = ({name}) => <h2>{name}</h2>

const Filter = ({inputValue, onChange}) => {
  return (
    <div>
      Filter shown with <input value={inputValue} onChange={onChange} />
    </div>
  )
}

const ShowPhonebook = ({persons, filter}) => {

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {filteredPersons.map(person => <ShowPerson key={person.id} person={person} />)}
    </div>
  )
}

const ShowPerson = ({person}) => <p>{person.name} {person.number}</p>




const PersonForm = ({persons, setPersons}) => {

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

    let newNameLow = newName.toLowerCase()

    if(persons.filter(person => person.name.toLowerCase() === newNameLow).length > 0)
      return alert(`${newName} is already added to phonebook`)

    let noteObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }

    setPersons(persons.concat(noteObject))
    setNewName('')
    setNewNumber('')
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



const Phonebook = ({persons, setPersons}) => {

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
        <PersonForm persons={persons} setPersons={setPersons} />

        <Title2 name="Numbers" />
        <ShowPhonebook persons={persons} filter={filterText}/>
        </div>
    )
}



export default Phonebook
