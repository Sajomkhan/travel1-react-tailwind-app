import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1 className='font-bold text-white text-2xl z-20'>Experiences</h1>
            <HiMenu
                onClick={() => setNav(!nav)}
                className='z-20 text-white cursor-pointer' size={30}
            />
            <div
                className={
                    nav
                        ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 z-10 ease-in duration-300'
                        : 'absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10'
                }
            >
                <ul className='flex flex-col w-full h-full items-center justify-center'>
                    <li className='font-bold text-3xl p-5'>Home</li>
                    <li className='font-bold text-3xl p-5'>Destinations</li>
                    <li className='font-bold text-3xl p-5'>Reservations</li>
                    <li className='font-bold text-3xl p-5'>Amenities</li>
                    <li className='font-bold text-3xl p-5'>Rooms</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar