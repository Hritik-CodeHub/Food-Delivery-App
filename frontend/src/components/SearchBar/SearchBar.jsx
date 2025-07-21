import React from 'react'
import "./SearchBar.css"
import { FaSearch } from 'react-icons/fa';
const SearchBar = () => {
    return (<>
        <div class="searchBar row g-3 align-items-center">
            <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                    <h1>All Offers from McDonald’s Lucknow</h1>
                </span>
            </div>
            <div class="search col-auto">
                <span><FaSearch style={{ 'fontSize':'18px' , 'margin':'5px', 'color':'gray'}} /></span>
                <input  placeholder="Search from menu..." />
            </div>

        </div>
    </>)
}

export default SearchBar