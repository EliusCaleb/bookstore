import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchForm.css'

const SearchForm = () => {
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form'>
            <div className='search-form-elem bg-white flex flex-sb'>
              <input type='text'className='form-control' placeholder=' The Lost city ...'/>
              <button className='flex flex-c'>
               <FaSearch className='text-purple' size={32}/>
              </button>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default SearchForm