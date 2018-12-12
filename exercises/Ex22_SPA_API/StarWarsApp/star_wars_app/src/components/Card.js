import React from 'react'

const Card = ({results,  id}) => {
    return (
        <div className="Card">
            <h2 className="Card-header">{results.name}</h2>
            <div className="Character-card">
               {/*} <img className="Card-img" src='https://imgix.ranker.com/node_img/75/1486577/original/luke-skywalker-film-characters-photo-1?w=200&h=200&fit=crop&crop=faces&q=60&fm=jpg' /> */} 
                <div className="Card-text">
                    <p>Height: {results.height}</p>
                    <p>Mass: {results.mass}</p>
                    <p>Hair color: {results.hair_color}</p>
                    <p>Skin color: {results.skin_color}</p>
                    <p>Eye color: {results.eye_color}</p>
                    <p>Birth year: {results.birth_year}</p>
                    <p>Gender: {results.gender}</p>
                    <br></br>
                    <button className="Card-btn">More info</button>
                </div>
            </div>
        </div>
    );
}

export default Card