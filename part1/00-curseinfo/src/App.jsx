const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts, exercises}) => {

  return (
    <>
      <Part part={parts[0]} exercise={exercises[0]} />
      <Part part={parts[1]} exercise={exercises[1]} />
      <Part part={parts[2]} exercise={exercises[2]} />
    </>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>{part} {exercise}</p>
  )
}

const Total = ({exercises}) => {
  return (
    <p>Number of exercises {exercises.reduce((sum, excercise) => sum + excercise, 0)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const partes = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={partes} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
