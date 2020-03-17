import React from 'react'
import { Box } from '@material-ui/core'

export const Header = ({name}) => {
  return (
    <Box style={{ textAlign: 'center' }}>
      <h2>{name}</h2>
    </Box>
  )
}
