import Logo from "./Logo"
import Socials from "./socials"
import { Github } from "./Icons"


const Footer = ({ bgColor, links }) => {
    return (
        <footer className="border-t-2 border-slate-800 pt-14" style={{background:bgColor}}>
            <div className="flex flex-col justify-between md:flex-row items-center gap-6 px-2 md:px-0">
                <Logo />
                <h1 className="text-6xl">MY FAVORITE SKATERS.</h1>
                <div className='m-2'>
                    <Socials links={links}/>
                </div>
            </div>
            <div className="text-center mt-14 pb-4">
                <a href="https://github.com/LeonardoCarrasco" className="flex items-center justify-center text-lg md:text-xl font-semibold hover:text-zinc-800">Made by Leonardo A. Carrasco <Github /></a>
            </div>
        </footer>
    )
}

export default Footer