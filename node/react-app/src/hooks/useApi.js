import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useApi = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const getData = () => {
    const getData = async () => {
      try {
        setLoad(true);
        const response = await axios.get(url);
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
  }

  return [data, err, load]
}

export default useApi
