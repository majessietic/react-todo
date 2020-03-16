import React, { createContext, useReducer } from 'react'
import { TodoReducer } from '@Reducer/TodoReducer'

const initialState = {
  todos: [
    { id: 1, 
      content: 'Do programming at 5am', 
      isCompleted: false
    },
    { id: 2,
      content: 'Learn about React',
      isCompleted: false
    },
    { id: 3,
      content: 'Be productive everyday',
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

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        completeTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}
