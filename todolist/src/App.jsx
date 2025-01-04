import React from 'react'
import Header from './Compoents/Header'
import Input from './Compoents/Input'
import Section from './Compoents/Section'
import Footer from './Compoents/Footer'

function App() {
  return (
    <div className='flex justify-center items-center  h-screen bg-blue-300'>
      <div className='bg-white min-h-1/5 flex justify-center items-center flex-col p-2 '>
        <Header />
        <Input />
        <Section />
        <Footer />
      </div>
    </div>
  )
}

export default App