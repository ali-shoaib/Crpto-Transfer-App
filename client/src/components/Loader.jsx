import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <>
      <Spinner style={{width: '4rem', height: '4rem'}} animation="border" variant="info" />
    </>
  )
}

export default Loader