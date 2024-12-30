import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { GithubUserProps } from './types/data.types';
import SearchBar from './components/SerachBar';
import Profile from './components/Profile';
import ProfileCard from './components/ProfileCard';

function App() {
  const [data, setData] = useState<GithubUserProps[]>([]);
  const [user, setUser] = useState<string>('');

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

  const handleUserSearch = (e:ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  } 

  return (
    <div className='container-xl'>
      <div className="container-search-bar">
        <SearchBar user={user} setUser={handleUserSearch}/>
        <ProfileCard userSearched={user} data={data}/>
      </div>
      <Profile data={data} userSearched={user}/>
    </div>
  )
}

export default App
