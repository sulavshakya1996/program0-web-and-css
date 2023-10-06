import useApi from "../../hooks/useApi";
const Random = () => {
  const [data, err, load] = useApi('https://www.themealdb.com/api/json/v1/1/random.php');
}



return (
  <div className='p-5'>
    {data && <div className='space-y-5'>
      <h1>{data.strMeal}</h1>
      <h2>{data.strCategory}</h2>
      <img className='h-[300px]' src={data.strMealThumb} alt="" />
      <p>{data.strInstructions}</p>
    </div>}
  </div>
)
}

export default Random