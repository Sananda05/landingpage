import React, { useState } from 'react'
import Header from '../component/Header/Header'
import Content1 from './Content1'
import Content2 from './Content2'

import './landingpage.css'

function LandingPage () {
  const [user, setuser] = useState(
    localStorage.getItem('content')
      ? localStorage.getItem('content')
      : 'sananda'
  )
  return (
    <div>
      <div className='main_Container'>
        <Header />
      </div>

      <div className='body__container'>
        {user === 'sananda' ? (
          <Content1 setuser={setuser} />
        ) : (
          <Content2 setuser={setuser} />
        )}
      </div>
    </div>
  )
}

export default LandingPage
