import React, { Fragment, useContext } from 'react'
import { TodoContext } from '@Context/TodoContext'

export const TodoList = ({ id, content, isCompleted }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext)


  console.log(isCompleted)
  
  return (
    <Fragment>
      <li onClick={() => completeTodo(id)}>
        {content} 
        <button onClick={() => deleteTodo(id)}>delete</button>
      </li>
    </Fragment>
  )
}
