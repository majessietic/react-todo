import React, { Fragment, useContext } from 'react'
import { TodoContext } from '@Context/TodoContext'
import { DeleteOutlined, CheckBoxOutlineBlank, CheckBox } from '@material-ui/icons'
import { Divider, Box } from '@material-ui/core'

export const TodoList = ({ id, content, isCompleted }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext)

  const checked = isCompleted ? <CheckBox onClick={() => completeTodo(id)} /> : <CheckBoxOutlineBlank onClick={() => completeTodo(id)} />
  
  return (
    <Fragment>
      <Box display='flex' alignItems='center' width='100%' p={1} bgcolor='background.paper'>
        <Box p={1}>
          {checked}
        </Box>
        <Box p={1} flexGrow={1}>
          {content}
        </Box>
        <Box p={1}>
          <DeleteOutlined onClick={() => deleteTodo(id)} />
        </Box>
      </Box>
      <Divider />
    </Fragment>
  )
}
