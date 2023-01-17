import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri'
const Navbar = () => {
  return (
    <div className=' flex items-center my-5 ml-28 md:ml-0'>
        <RiRestaurant2Fill className=' text-4xl text-orange-500'/>
        <p className='text-3xl text-orange-500 font-bold'>How2Cook</p>
    </div>
  )
}

export default Navbar