import React, { Fragment } from 'react'
import { Header } from '@Components/Header'
import { Main } from '@Components/Main'
import { Footer } from '@Components/Footer'
import { TodoContextProvider } from '@Context/TodoContext'
import { Box } from '@material-ui/core'

export const App = () => {
  return (
    <TodoContextProvider>
      <Fragment>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' >
          <Header />
          <Main />
          <Footer />
        </Box>
      </Fragment>
    </TodoContextProvider>
  )
}
