import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ImYoutube} from 'react-icons/im'
import Loader from './Loading/Loader';

const Detail = () => {
  const {id} = useParams();
  const [meal,setMeal] = useState([]);
  const [loading,setLoading] = useState(true);
  const getDetail = async ()=>{
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    // console.log(data.meals[0]);
    setMeal(data?.meals[0])
    setLoading(false)
  }
  useEffect(()=>{
    getDetail()
  },[])
  return (
    <>
      <div className=' absolute top-1/2 left-[45%]'>
        {
          loading && <Loader/>
        }
      </div>
    <div className=' p-5'>
      <img src={meal.strMealThumb} className=' h-[500px] rounded-md'/>
      <div className=' mt-5'>
        <h1 className=' py-1 px-5 rounded-full text-white text-sm bg-orange-500 inline'>{meal.strCategory}</h1>
        <p className=' font-bold text-xl mt-4'>{meal.strMeal}</p>
        <p className=' mt-5 font-bold text-lg'>Instructions</p>
        <p className=' tracking-wide leading-7 text-slate-600 font-semibold'>{meal.strInstructions}</p>
      </div>
      <a className=" flex items-center gap-3 mt-4" href={meal.strYoutube} target="_blank">
        <ImYoutube className=' text-3xl text-red-600'/>
        <span className=' font-semibold'>Watch on YouTube</span>
      </a>
    </div>
    </>

  )
}

export default Detail