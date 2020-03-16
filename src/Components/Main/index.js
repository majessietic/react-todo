import React, { useContext, Fragment } from 'react'
import { TodoList } from '@Components/Main/TodoList'
import { TodoContext } from '@Context/TodoContext'

export const Main = () => {
  const { todos } = useContext(TodoContext)

  const todoList = todos.length ? (
    <Fragment>
      {todos.map(todo => (
        <TodoList 
          key={todo.id}
          id={todo.id}
          content={todo.content}
          isCompleted={todo.isCompleted}
        />
      ))}
    </Fragment>
  ) : (
    <h2>No more Todo&apos;s Left</h2>
  )

  return (
    <Fragment>
      {todoList}
    </Fragment>
  )
}
