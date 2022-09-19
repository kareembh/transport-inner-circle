import React from 'react'
import Footer from '../footer/footer';
import NavBar from '../navbar/navbar'

const layout = ({children}) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default layout;