import React from 'react'

const Card = () => {
    return (
        <div className="Card">
            <p className="Sw-txt">Luke Skywalker</p>
            <div className="Character-card">
                <img className="Card-img" src='https://imgix.ranker.com/node_img/75/1486577/original/luke-skywalker-film-characters-photo-1?w=200&h=200&fit=crop&crop=faces&q=60&fm=jpg' />
                <div className="Card-text">
                    <p>Height: 172</p>
                    <p>Mass: 77</p>
                    <p>Hair color: blond</p>
                    <p>Skin color: fair</p>
                    <p>Eye color: blue</p>
                    <p>Birth year: 19BBY</p>
                    <p>Gender: male</p>
                    <br></br>
                    <button className="Card-btn">More info</button>
                </div>
            </div>
        </div>
    );
}

export default Card