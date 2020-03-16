import React from 'react'
import { Header } from '@Components/Header'
import { Main } from '@Components/Main'
import { Footer } from '@Components/Footer'
import { TodoContextProvider } from '@Context/TodoContext'

export const App = () => {
  return (
    <TodoContextProvider>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </TodoContextProvider>
  )
}
