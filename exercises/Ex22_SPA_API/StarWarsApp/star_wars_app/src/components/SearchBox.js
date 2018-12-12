import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div id="Search-div">
            <input
                id="Search-input"
                onChange={searchChange}
                type="search"
                placeholder="FIND..."
            />
        </div>
    );
}

export default SearchBox;