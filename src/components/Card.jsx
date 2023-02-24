import { Link } from "react-router-dom"

const Card = ({skater}) => {

    return (
        <>
        <article className="w-52 md:w-64">
            <div className="text-center font-semibold my-10 w-full py-5 text-xl sombra-text-box uppercase" style={{backgroundColor:skater.bgColor}}>
                {skater.ranking}.{skater.nombre}
            </div>
            <figure className="w-full">
                <img src={skater.imagen} alt="" className="sombra aspect-[2/3] object-cover" style={{width:'inherit'}}/>
            </figure>
            <Link to={skater.path}><button className="mt-14 text-center bg-neutral-800 text-white w-full py-3 font-semibold hover:bg-neutral-900">SEE MORE</button></Link>
        </article>
        </>

    )
}

export default Card