
const Header = ({text}) => {
return (
    <h1>{text}</h1>
)
}

const Content = (props) => {
const parts = props.parts.map(part => <Part key={part.id} part={part} />)
const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

return (
    <>
    {parts}      
    <Total total={total} />
    </>
)
}

const Part = ({part}) => {
return (
    <p>
    {part.name} {part.exercises}
    </p>
)
}

const Total  = ({total}) => {
return (
    <strong>total of {total} exercises</strong>  
)
}

const Course = ({course}) => {

return (
    <div>
    <Header text={course.name} />
    <Content parts={course.parts} />
    </div>
)
}

const ShowCurses = (props) => {
const courses = props.courses.map(course => <Course key={course.id} course={course} />)
return (
    <div>
    {courses}
    </div>
)
}

export default ShowCurses