import Content from '../components/Content'
import Header  from '../components/Header'
import Intro  from '../components/Intro'
import Footer from '../components/Footer'

import MySocials from '../mySociasl.json'

const Home = () => {
    return (
    <div id='Home'>
        <div id='_Home'>
        <Header links={MySocials.socials}/>
        <main>
            <Intro />
            <Content />
        </main>
        <Footer links={MySocials.socials}/>
        </div>
    </div>
    )
}

export default Home