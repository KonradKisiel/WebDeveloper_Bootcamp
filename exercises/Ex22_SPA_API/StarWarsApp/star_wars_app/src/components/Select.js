import React from 'react'

const Select = ({ select, optionChange }) => {
    return (
        <div id="Search-select">
            <select name="select" onChange={optionChange}>
                <option value="CHARACTERS">CHARACTERS</option>
                <option value="PLANETS">PLANETS</option>
                <option value="FILMS">FILMS</option>
                <option value="SPECIES">SPECIES</option>
                <option value="VEHICLES">VEHICLES</option>
                <option value="STARSHIPS">STARSHIPS</option>
            </select>
        </div>
    );
}

export default Select