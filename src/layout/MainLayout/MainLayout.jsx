import React from 'react'
import Footer from '../../components/atoms/Footer'
import Header from '../../components/atoms/Header'


const MainLayout = ({children}) => {
  return (
    <div className='c-main-layout'>
      <Header />
      <main className='c-main-layout__main'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout