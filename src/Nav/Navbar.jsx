import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri'
const Navbar = () => {
  return (
    <div className=' flex items-center my-5'>
        <RiRestaurant2Fill className=' text-4xl text-orange-500'/>
        <p className='text-4xl text-orange-500'>Foodie</p>
    </div>
  )
}

export default Navbar