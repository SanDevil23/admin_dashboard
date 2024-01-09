import React from 'react'
import './searchBar.css'

function SearchBar() {
  return (
    <div className='search-bar'>
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input title='Enter search keyword' name="query" placeholder='Search' type="text" />
        <button type="submit" title="Search">
            <i className='bi bi-search'></i>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
