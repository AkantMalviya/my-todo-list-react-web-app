import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
   let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"

  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length === 0 ? "No Todo available, please add a new Todo" :props.todos.map( todo => {
        return ( <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
      }) 
      }
    </div>
  )
}

export default Todos
