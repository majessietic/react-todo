import React, { useState, useContext } from 'react'
import { TodoContext } from '@Context/TodoContext'

export const Footer = () => {
  const [content, setContent] = useState('')

  const { addTodo } = useContext(TodoContext)

  const handleKeyPress = e => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000000),
      content,
      isCompleted: false
    }
    if (!content) return
    if (e.key === 'Enter') {
      addTodo(newTodo)
      setContent('')
    }
  }

  return (
    <div className="footer">
      <input 
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add new Todo"
      />
    </div>
  )
}
