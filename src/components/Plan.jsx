import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1300px] m-auto my-16 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh] px-3 lg:px-0'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://pix10.agoda.net/hotelImages/12162/-1/786a76fee843f97c2d08235eee23be73.jpg?ca=19&ce=1&s=1024x768'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://media-cdn.tripadvisor.com/media/photo-s/1c/19/dd/ff/grand-water-villas-with.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://www.holidify.com/images/cmsuploads/compressed/216268208_20210406215851.jpg'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://pyt-blogs.imgix.net/2020/05/male12-.jpeg?auto=format&ixlib=php-3.3.0'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://media-cdn.tripadvisor.com/media/photo-s/1b/f4/56/f1/aerial-view.jpg'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center px-4'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Molestias,
          nam?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-sky-600 text-white border-none hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
