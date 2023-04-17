import axios from 'axios'
import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [state, setState] = useState()
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
      
        //const url = `https://rickandmortyapi.com/api/location/${locationNumber}`

        
        
    axios.get(url)
         .then(res => {
          setState(res.data)
          setHasError(false)
        })
         .catch(err => {
          setHasError(true)
          console.log(err)})
    
    
    }, [url])

  return [state, hasError]
   
}

export default useFetch