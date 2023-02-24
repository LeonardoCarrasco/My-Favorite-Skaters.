import { Twitter, Youtube, Instagram } from "./Icons"

const Socials = ({ links }) => {

    return (
        <div className="flex items-center">
            <a href={links.twitter} className="text-2xl px-1 hover:text-[#00acee] hover:scale-110 hover:transition-all"><Twitter /></a>
            <a href={links.instagram} className="text-3xl px-1 hover:text-[#F56040] hover:scale-110 hover:transition-all"><Instagram /></a>
            <a href={links.youtube} className="text-3xl px-1 hover:text-[#FF0000] hover:scale-110 hover:transition-all"><Youtube /></a>
        </div>
    )
}

export default Socials