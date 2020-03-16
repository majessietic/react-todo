import React, { useContext } from 'react'
import { TodoList } from '@Components/Main/TodoList'
import { TodoContext } from '@Context/TodoContext'

export const Main = () => {
  const { todos } = useContext(TodoContext)

  const todoList = todos.length ? (
    <ul>
      {todos.map(todo => (
        <TodoList 
          key={todo.id}
          id={todo.id}
          content={todo.content}
          isCompleted={todo.isCompleted}
        />
      ))}
    </ul>
  ) : (
    <h1>No more Todo&apos;s Left</h1>
  )

  return (
    <div className="main">
      {todoList}
    </div>
  )
}
