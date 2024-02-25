import React from 'react'

const MainLayout = ({childern}) => {
  return 
    <div>
        <header/>
        {childern}
        <Footer/>
    </div>
  
};

export default MainLayout