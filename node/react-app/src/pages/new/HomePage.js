import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data.categories);
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
      setErr(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return `${err}`
  }


  return (
    <div>


      {data && data.map((cata, i) => {
        return <div key={i}>
          <h1>{cata.strCategory}</h1>
          <img src={cata.strCategoryThumb} alt="" />
          <p>{cata.strCategoryDescription}</p>
        </div>
      })}

    </div>
  )
}

export default HomePage