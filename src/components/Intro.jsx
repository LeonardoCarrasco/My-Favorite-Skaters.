
const Intro = () => {
    return (
        <div className='py-2 md:pb-0 border-b-2 border-slate-800'>
        <div className='container mx-auto relative'>
          <h1 className='text-center w-full font-black text-6xl sm:text-8xl md:text-9xl xl:text-[9rem] main-title z-10 relative'>MY FAVORITE SKATERS.</h1>
          <h1 className='text-center w-full font-black text-6xl sm:text-9xl md:text-9xl xl:text-[9rem] text-transparent text-behind absolute top-10 sm:top-20 md:top-28'>MY FAVORITE SKATERS.</h1>
        </div>
        <div className='mx-atuo'>
          <div className='relative mx-auto md:w-6/12 lg:w-2/4 xl:w-2/5 w-9/12 -top-10 sm:-top-20 md:-top-22 lg:-top-18'>
            <figure className='relative z-30'>
              <img src="src\assets\skateboy1.png" alt="skateboy" className='saturate-50 drop-shadow-2xl' />
            </figure>
            <figure className='absolute top-14 z-20'>
              <img src="src\assets\bg-stickerss.png" alt="sticker bg" />
            </figure>
          </div>
        </div>
      </div>
    )
}


export default Intro