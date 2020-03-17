export function TodoReducer (state, action) {
  switch(action.type) {
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
