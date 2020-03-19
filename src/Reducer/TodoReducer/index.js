export function TodoReducer (state, action) {
  switch(action.type) {
    case 'EDIT_TODO': {
      const id = state.todos.findIndex(todo => todo.id === action.id)
      const todo = {...state.todos[id]}
      todo.content = action.content
      const todos = [...state.todos]
      todos.splice(id, 1, todo)
      return {
        todos: todos
      }
    }
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: [...state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.isCompleted = !todo.isCompleted
          }
          return todo
        })]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [ ...state.todos, action.payload ]
      }
    default:
      return state
  }
}
