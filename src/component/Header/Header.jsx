import React from 'react'
import Navbar from './Navbar'
import './header.css'

function Header ({ openSidebar }) {
  return (
    <div className='header'>
      <Navbar openSidebar={openSidebar} />
    </div>
  )
}

export default Header
