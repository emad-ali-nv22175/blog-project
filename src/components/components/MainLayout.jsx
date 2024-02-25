import React, { Children } from 'react'

const MainLayout = ({childern}) => {
  return 
    <div>
      <Header /> 
      {Children}
      <Footer />
    </div>
  
}

export default MainLayout
