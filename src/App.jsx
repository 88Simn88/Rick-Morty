
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'

function App() {

  const [inputValue, setInputValue] = useState(getRandomLocation())
  
  

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`

  //const url = "https://rickandmortyapi.com/"

  const [location, hasError] = useFetch(url)

  const inputLocation = useRef()
  
  const handleSubmit = event => {
      event.preventDefault()
      //event.target.firstChild.value
      setInputValue(inputLocation.current.value)
  }



  return (
    <div className="app">
      <header className='rectangle'>
        
      </header>
      <h1 className="app__title">Rick and Morty</h1>
      <form className="app__form" onSubmit={handleSubmit}>
      <input className="app__input" placeholder='Number from 1 to 126' ref={inputLocation} type="text" />
      <button className="app__btn">Search</button>

      </form>

    {
      hasError
        ? <h2 className='app__error'> Hey! you must provide an id from 1 to 126 🤢</h2>
        : <MainContent location={location} />
    }

    

      <footer className='footer'>
        <p>Coded by Simn</p>

      </footer>
    </div>
  )
}

export default App