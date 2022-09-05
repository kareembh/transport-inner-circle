import React from 'react'
import NavBar from '../navbar/navbar'

const layout = ({children}) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
    </div>
  )
}

export default layout;