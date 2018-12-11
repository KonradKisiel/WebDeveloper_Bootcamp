import React from 'react'

const TopBar = ({searchfield, searchChange}) => {
    return (
        <div id="App-top-bar">
            <header className="App-header">
                <h1 className="Sw-txt">Star Wars App</h1>
            </header>
            <div id="Search-bar">
                <form>
                    <select id="Search-select" name="select">
                        <option value="character">CHARACTERS</option>
                        <option value="character">PLANETS</option>
                        <option value="character">FILMS</option>
                        <option value="character">SPECIES</option>
                        <option value="character">VEHICLES</option>
                        <option value="character">STARSHIPS</option>
                    </select>
                    <input id="Search-input" type="text" placeholder="FIND..." />
                </form>
            </div>
        </div>
    );
}

export default TopBar;