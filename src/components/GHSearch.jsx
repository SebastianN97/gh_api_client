import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import users from '../modules/users';

const GHSearch = () => {

  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username"/>
      <Button name="search">Search</Button>
    </>
  )
}

export default GHSearch
