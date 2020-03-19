import React, { createContext, useReducer } from 'react'
import { TodoReducer } from '@Reducer/TodoReducer'

const initialState = {
  todos: [
    { id: 1, 
      content: 'Learn JavaScript', 
      isCompleted: false
    },
    { id: 2,
      content: 'Learn React',
      isCompleted: false
    },
    { id: 3,
      content: 'Learn Hooks',
      isCompleted: false
    }
  ]
}

export const TodoContext = createContext(initialState)


export const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const addTodo = todo => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  }

  const deleteTodo = id => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
  }

  const completeTodo = id => {
    dispatch({
      type: 'COMPLETE_TODO',
      payload: id
    })
  }

  const editTodo = (id, content) => {
    dispatch({
      type: 'EDIT_TODO',
      id: id,
      content: content
    })
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        completeTodo,
        editTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}
