import cartoon from '../assets/images/cartoon-final.svg'
import './landingpage.css'

function Content1 ({ setuser }) {
  // const [darkMode, toggleDarkMode] = useDarkMode()

  const toggleContent = () => {
    setuser('other')
    localStorage.setItem('content', 'other')
  }
  return (
    <div>
      <div className='home' id='home'>
        <div className='home__title_text'>
          <div className='home__title_text_medium'>Hi,</div>
          <div className='text__name'>
            <div className='home__title_text_small'>I'm</div>
            &nbsp; &nbsp;
            <div className='home_title_text_large'>
              Fatema-tuz-zohora Sananda
            </div>
          </div>

          <div
            className='home__btn'
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#626EE3'
            }}
            onClick={toggleContent}
          >
            Change content
          </div>
        </div>
        <div className='home__background_img'>
          <img src={cartoon} alt='' height='750px' width='560px' />
        </div>
      </div>
    </div>
  )
}

export default Content1
