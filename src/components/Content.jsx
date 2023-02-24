import Card from "./Card"
import Skaters from "../Skaters"

const Content = () => {

    return (
        <section className="py-16 md:py-28 w-4/5 m-auto">
            <h1 className="text-left text-5xl md:text-7xl lg:text-8xl font-black">ARE...</h1>
            <div className="flex flex-col  items-center md:flex-row flex-wrap md:justify-between py-5">
                {Skaters.map((skater, key) => <Card key={key} skater={skater} />)}
            </div>
            <p className="mt-20"><strong>Other Skaters who are amazing: </strong>Yuto Horigome, Luan Oliveira, Milton Martinez, Andrew Reynolds, Chris Cole, Ishod Wair.</p>
        </section>
    )
}

export default Content