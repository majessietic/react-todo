import React, { useState, useContext, Fragment } from 'react'
import { TodoContext } from '@Context/TodoContext'
import { Box } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { Add } from '@material-ui/icons'

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
    <Fragment>
      <Box display='flex' alignItems='center'>
        <Box>
          <Add />
        </Box>
        <Box p={1}>
          <TextField
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add new Todo"
          />
        </Box>
      </Box>
    </Fragment>
  )
}
