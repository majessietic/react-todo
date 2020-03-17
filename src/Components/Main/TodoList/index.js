import React, { Fragment, useContext } from 'react'
import { TodoContext } from '@Context/TodoContext'
import { DeleteOutlined, CheckBoxOutlineBlank, CheckBox } from '@material-ui/icons'
import { Divider, Box } from '@material-ui/core'

export const TodoList = ({ id, content, isCompleted }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext)

  const checked = isCompleted ? (
    <CheckBox
      onClick={() => completeTodo(id)}
      style={{ cursor: 'pointer' }}
    />
  ) : (
    <CheckBoxOutlineBlank 
      onClick={() => completeTodo(id)} 
      style={{ cursor: 'pointer' }}
    />
  )
  
  return (
    <Fragment>
      <Box display='flex' alignItems='center' width='100%'>
        <Box p={1}>
          {checked}
        </Box>
        <Box 
          p={1} 
          flexGrow={1} 
          style={{ 
            textDecoration: isCompleted ? 'line-through' : '',
            opacity: isCompleted ? '0.5' : '1'
          }}
        >
          {content}
        </Box>
        <Box p={1}>
          <DeleteOutlined 
            onClick={() => deleteTodo(id)} 
            style={{ cursor: 'pointer' }}
          />
        </Box>
      </Box>
      <Divider />
    </Fragment>
  )
}
