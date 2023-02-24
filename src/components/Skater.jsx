
import Footer from "./Footer"
import Header from "./Header"
import { Wikipedia } from "./Icons"
import Socials from "./socials"
import MySocials from '../mySociasl.json'


const Skater = ({ skater }) => {


    return (
        <div style={{background:skater.bgColor}}>
            <div id="Skater" >
            <Header links={MySocials.socials}/>
            <section className="">
                <h1 className="relative z-50 uppercase text-6xl">{skater.nombre}</h1>
                <div className="flex flex-col justify-center items-center xl:items-start xl:flex-row px-8 lg:px-20">
                    <figure className="md:mr-10 relative -top-5 md:w-1/2 ">
                        <img src={skater.imagen} alt={`A photo of ${skater.nombre}`}  className="sombra"/>
                    </figure>
                    <div className="biography p-4 flex flex-col w-full xl:w-2/3 self-stretch justify-between">
                        <div>
                            <p className="mb-4 lg:text-xl">{skater.biografia}</p>
                        </div>
                        <div className="mt-10 flex items-center">
                            <Socials links={skater.socials}/>
                            <a href={skater.socials.Wikipedia} className="text-4xl px-1 hover:text-gray-600 hover:scale-110 hover:transition-all"> <Wikipedia /></a>
                        </div>
                    </div>
                </div>
                <div className="px-8 md:px-20 mt-14">
                    <h2 className="text-4xl font-bold">SPONSORS: </h2>
                    <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-start py-16 gap-8">
                        {skater.patrocinadores.map((sponsor, key) => 
                        <figure key={key} className="w-[160px]">
                            <img src={sponsor} alt="Sponsors" />
                        </figure>
                    )}
                    </div>
                </div>
            </section>
            <Footer links={MySocials.socials}/>
            </div>
        </div>
    )
}

export default Skater