import Logo from './Logo'
import Socials from './socials'

 const Header = ({links}) => {
    return (
        <header className='relative left-0 right-0 top-0 flex items-center justify-between pb-2'>
          <Logo />
        <div className='m-2'>
          <Socials links={links}/>
        </div>
      </header>
    )
}

export default Header