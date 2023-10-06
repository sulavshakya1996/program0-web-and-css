import React from 'react'
import { mealData } from '../dummy/datalogic'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router'
import Detail from './Detail'

const Main = () => {
  const nav = useNavigate();
  return (
    <div>
      <div>
        <Header />
        {mealData.map((meal, i) => {
          return <div className='cursor-pointer'
            key={i} >
            <button className='bg-orange-500 text-white my-4 px-2 py-1 rounded-sm hover:'></button>

            <img onClick={() => nav(`/detail/${meal.idMeal}`)} className='h-[200px]' src={meal.strMealThumb} alt="" />
            <h1>
              {meal.strMeal}</h1>
            <h1>{meal.strMealThumb}</h1></div>
        })}
      </div>
      <h1>this is homepage</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur minima aut numquam doloribus laudantium itaque aperiam ad debitis sint. Autem atque fuga cumque sed veritatis pariatur placeat iusto ducimus asperiores!0</p>

    </div>
  )
}

export default Main
