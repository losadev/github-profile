import SearchIcon from "./SearchIcon";
import '../styles/SearchBar.css';
import { ChangeEvent } from "react";

interface Props {
  user: string;
  setUser: (e:ChangeEvent<HTMLInputElement>)=>void;
}

const SearchBar = ({user,setUser}:Props) => {

  return (
    <div className="search-bar">
      <SearchIcon />
      <input type="search" placeholder="username" value={user} onChange={setUser}/>
    </div>
  )
}

export default SearchBar;