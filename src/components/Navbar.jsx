import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, } from 'react-icons/fa';
import Logo from './logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className='absolute z-10 w-full h-[70px] bg-blue-700/30 flex justify-between items-center px-4 bg-[var(--bg-nav)] text-white'>
            <div>
                <img src={Logo} alt="Logo" style={{ width: '200px' }} className='ml-10' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex mr-10'>
                <li> <Link className='hover:cursor-pointer mr-5' to="home" smooth={true} duration={500}>Home</Link></li>
                <li> <Link className='hover:cursor-pointer mr-5' to="booking" smooth={true} duration={500}>Booking</Link></li>
                <li> <Link className='hover:cursor-pointer mr-5' to="rooms" smooth={true} duration={500}>Rooms</Link></li>
                <li> <Link className='hover:cursor-pointer mr-5' to="foods" smooth={true} duration={500}>Amenities</Link></li>
                <li> <Link className='hover:cursor-pointer mr-5' to="footer" smooth={true} duration={500}>About</Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={() => setNav(!nav)} className='md:hidden z-20'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="booking" smooth={true} duration={500}>Booking</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="rooms" smooth={true} duration={500}>Rooms</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="foods" smooth={true} duration={500}>Amenities</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="footer" smooth={true} duration={500}>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar

// const Navbar = () => {
//     const [nav, setNav] = useState(false)

//     return (
//         <div className='absolute w-full flex justify-between p-4 items-center'>
//             <img className='z-20' style={{width: '220px'}} src={Logo} alt="" />
//             <HiMenu
//                 onClick={() => setNav(!nav)}
//                 className='z-20 text-white cursor-pointer' size={30}
//             />
//             <div
//                 className={
//                     nav
//                         ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 z-10 ease-in duration-300'
//                         : 'absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10'
//                 }
//             >
//                 <ul className='flex flex-col w-full h-full items-center justify-center'>
//                     <li className='font-bold text-3xl p-5'>Home</li>
//                     <li className='font-bold text-3xl p-5'>Destinations</li>
//                     <li className='font-bold text-3xl p-5'>Reservations</li>
//                     <li className='font-bold text-3xl p-5'>Amenities</li>
//                     <li className='font-bold text-3xl p-5'>Rooms</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
