import React from 'react'

const SearchBox = ({ searchChange, optionChange }) => {
    return (
        <div id="Search-box">
            <form>
                <select id="Search-select" name="select" onChange={optionChange}>
                    <option value="people">CHARACTERS</option>
                    <option value="planets">PLANETS</option>
                    <option value="films">FILMS</option>
                    <option value="species">SPECIES</option>
                    <option value="vehicles">VEHICLES</option>
                    <option value="starships">STARSHIPS</option>
                </select>
                <input
                    id="Search-input"
                    onChange={searchChange}
                    type="search"
                    placeholder="FIND..."
                />
            </form>
        </div>
    );
}

export default SearchBox;