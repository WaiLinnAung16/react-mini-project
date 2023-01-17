import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loader from './Loading/Loader';

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const [loading,setLoading] = useState(true);
    const getMeals = async ()=>{
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        setMeals(data.meals);
        setLoading(false)
    }
    useEffect(()=>{
        getMeals()
    },[])
  return (
    <>
      <div className=' absolute top-1/2 left-[45%]'>
        {
          loading && <Loader/>
        }
      </div>
      <div className=' flex flex-wrap gap-5'>
        {meals?.map((meal)=><Card key={meal.idMeal} meal={meal}/>)}
      </div>
    </>

  )
}

export default Meals