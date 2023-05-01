import React from 'react'
import './Home.css';
import SearchInput from '../components/SearchInput'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='main_div' >
       
      <div className="myapp">
      <h1>Search Your Favourite npm-package</h1>
      </div>
      <div className='listLink'>
            <span>
                <Link to='/list'>Package List</Link>
            </span>
        </div>
      <div className='searchBox'>
        <h2>Search for NPM Packages</h2>
        <SearchInput placeholder="Search NPM Packages"/>
      </div>
      
    </div>
  )
}
