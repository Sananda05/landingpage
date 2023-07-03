import React from 'react'
import logo from '../../assets/images/logo2.svg'
import menuIcon from '../../assets/images/menuIcon.svg'

import useDarkMode from '../../hooks/useDarkMode'

function Navbar ({ openSidebar }) {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <>
      <nav className='navbar'>
        <div className='navbar__menuIcon'>
          <img
            src={menuIcon}
            alt=''
            height={'30'}
            width={'30'}
            onClick={openSidebar}
          />
        </div>
        <div className='navbar__logo'>
          <a href='/'>
            <img src={logo} alt='' height={'150px'} width={'150px'} />
          </a>
        </div>
        <div className='navbar__feature'>
          <div>
            <a href='#home' className='navbar__feature_item'>
              home
            </a>
          </div>

          <div>
            <a href='#about' className='navbar__feature_item'>
              about me
            </a>
          </div>

          <div>
            <a href='#projects' className='navbar__feature_item'>
              <span>projects</span>
            </a>
          </div>

          <div>
            <a href='#contact' className='navbar__feature_item'>
              contact
            </a>
          </div>

          <div
            style={{
              width: '8rem',
              height: '2rem',
              borderRadius: '10px',
              backgroundColor: 'white',
              boxShadow: '0 2px 2px 2px rgb(202, 225, 236)',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <div
              className='navbar__feature_item'
              style={{ color: '#5E5EFB' }}
              onClick={() => toggleDarkMode(darkMode)}
            >
              change theme
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
