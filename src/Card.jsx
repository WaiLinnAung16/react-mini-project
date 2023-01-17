import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className=' w-72 md:w-60 border p-3 rounded-md flex flex-col justify-center items-center relative h-[400px] shadow-sm transition hover:shadow-lg hover:scale-105'>
        <img src={meal.strMealThumb} className=" rounded-sm mb-3"/>
        <h1>{meal.strMeal}</h1>
        <button className=' py-1 px-5 mt-4 bg-sky-500 text-white rounded absolute bottom-3'>
        <Link to={`/detail/${meal.idMeal}`}>
            Detail
        </Link>
        </button>
    </div>
  )
}

export default Card