import React from 'react'

const Hero = () => {
    return (
        <div name='home' className='w-full h-screen'>
            <img 
                className='top-0 left-0 w-full h-screen object-cover' 
                src="https://s5s6c2i4.stackpathcdn.com/wp-content/uploads/2021/08/img_testata_pag_beach_villa-1.jpg" 
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='sm:left-[10%] m-auto absolute p-4'>
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nemo rem ipsum nesciunt error illo voluptatem molestias harum et minima.
                    </p>
                    <button className='bg-white/40 text-black'>Reserve Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero