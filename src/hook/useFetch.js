import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [ items, setItems ] = useState([])
  
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setItems(result);
    } catch(error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  
  useEffect(() => {
    fetchData()
  }, [])
  
  return { items }
  
}

export default useFetch
