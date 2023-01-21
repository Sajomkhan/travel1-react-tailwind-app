import React from 'react';

const Rooms = () => {
  return (
    <div name='rooms' className='max-w-[1300px] bg-sky-200 my-11 mx-auto grid lg:grid-cols-2 gap-4'>
      <div className='flex flex-col h-full justify-center lg:text-right pt-8'>
        <h3 className='px-5 text-4xl font-bold'>Fine Interior Rooms</h3>
        <p className='px-5 pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-2 lg:p-8 px-5 pb-8'>
        <img
          className=' row-span-1 object-coverw-full h-full'
          src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
        />
        <img
          className='row-span-1 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;
