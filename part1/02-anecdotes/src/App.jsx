import { useState } from 'react'

const Section = ({ title, anecdote, votes }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const anecdotesLen = anecdotes.length

  const getRandomIndex = () =>  Math.floor(Math.random() * anecdotesLen)
  const initArray = () => Array(anecdotesLen).fill(0)  

  const [selected, setSelected] = useState(getRandomIndex)
  const [votes, setVotes] = useState(initArray)


  let maxVotes = Math.max(...votes)
  let maxVoteIndex = votes.indexOf(maxVotes)


  const handleSelected = () => {
    let random = selected
    while(selected === random){
      random = getRandomIndex
    }
    setSelected(random)
  }

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Section
        title='Anecdote of the day'
        anecdote={anecdotes[selected]}
        votes={votes[selected]} />

      <Button handleClick={handleVotes} text='vote' />
      <Button handleClick={handleSelected} text='next anecdote' />

      <Section
        title='Anecdote with most votes'
        anecdote={anecdotes[maxVoteIndex]}
        votes={votes[maxVoteIndex]}/>
    </div>
  )
}

export default App