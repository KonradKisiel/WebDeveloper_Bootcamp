import React from 'react'
import Card from '../components/Card'

const Content = ({ cardsText }) => {
    return (
        <div id="Container">
            <article>
                <div id="Content">
                    {
                        cardsText.map((textData, i) => {
                            return (
                                <Card
                                    key={i}
                                    id={cardsText[i].id}
                                    results={cardsText[i]}
                                />
                            );
                        })
                    }
                </div>
            </article>
        </div>
    );
}

export default Content