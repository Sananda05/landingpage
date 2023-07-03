import phoneIcon from '../assets/images/phone.svg'
import mailIcon from '../assets/images/mail.svg'
import './landingpage.css'

function Content2 ({ setuser }) {
  //   const [darkMode, toggleDarkMode] = useDarkMode()

  const toggleContent = () => {
    setuser('sananda')
    localStorage.setItem('content', 'sananda')
  }
  return (
    <div>
      <div>
        {/* <div style={{ position: 'relative' }}>
          <div
            className='home__btn'
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#EDBAFF',
              position: 'absolute',
              marginTop: '0rem',
              top: '10px',
              right: '15px'
            }}
            onClick={toggleDarkMode}
          >
            Change theme
          </div>
        </div> */}
        <div className='aboutme__textContainer'>
          <div className='aboutme__title1'>
            About <span className='aboutme__title2'>Me</span>
          </div>
          <div className='aboutme__descriptionContainer'>
            <div className='aboutme__descriptionText'>
              As a student of Software Engineering, developing new applications
              seemed interesting t me. So, I started my software development
              journey with App development and after that, I started learning
              Web development. <br /> <br /> I really enjoy working as a
              Frontend Developer and building user-friendly applications.
              Passionate about learning new things and widening my knowledge.{' '}
              <br /> <br /> Besides, I also worked on UI/UX designing due to my
              interest in ART. <br /> <br /> In my free time, I also practice
              Graphic Designing and Digital Painting. <br />
              <br />
              Feel free to visit my{' '}
              <a
                href='https://www.instagram.com/_._.artysan._._/'
                target='_blank'
                rel='noreferrer'
              >
                <b style={{ color: '#5E5EFB' }}>Artworks.</b>
              </a>
              <br />
              <br />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <div
                  className='home__btn'
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    backgroundColor: '#626EE3',
                    marginTop: '1rem'
                  }}
                  onClick={toggleContent}
                >
                  Change content
                </div>
                <div className='aboutme__contactOption'>
                  <div className='aboutme__contactItem'>
                    <img src={phoneIcon} alt='' height={15} width={15} />
                    <div style={{ marginLeft: '1rem', fontSize: '14px' }}>
                      +880 1776-451545
                    </div>
                  </div>
                  <div className='aboutme__contactItem'>
                    <img src={mailIcon} alt='' height={15} width={15} />
                    <div style={{ marginLeft: '1rem', fontSize: '14px' }}>
                      sananda@iut-dhaka.edu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content2
