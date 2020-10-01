import React from 'react'
import Header from './components/Title'
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <>
      <section name="title">
        <Header />
      </section>
      <section name="main">
        <GHSearch/>
      </section>
    </>
  )
}

export default App



