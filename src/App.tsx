import { useEffect, useState } from 'react'
import './App.css'
import { GithubUserProps } from './types/data.types';

function App() {
  const [data, setData] = useState<GithubUserProps[] | null>(null);

  useEffect(() => {    
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <div className='container-xl'>
    </div>
  )
}

export default App
