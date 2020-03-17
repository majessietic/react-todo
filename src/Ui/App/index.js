import React, { Fragment } from 'react'
import { Header } from '@Components/Header'
import { Main } from '@Components/Main'
import { Footer } from '@Components/Footer'
import { TodoContextProvider } from '@Context/TodoContext'
import { Box, CssBaseline, Typography } from '@material-ui/core'

export const App = () => {
  return (
    <TodoContextProvider>
      <Fragment>
        <CssBaseline />
        <Typography />
        <Box 
          justifyContent='flex-end' 
          alignItems='center' 
          flexDirection='column'
          style={{
            height: '500px',
            width: '330px',
            padding: '.5rem'
          }}
          border={1}
        >
          <Header name='Todo List' />
          <Main />
          <Footer />
        </Box>
      </Fragment>
    </TodoContextProvider>
  )
}
