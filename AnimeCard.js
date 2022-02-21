import React from 'react'
function AnimeCard(props) {
    const {title, image_url, score, rated} = props.show
    return (
        <div className='aniCard'>
            <div className="title">
            <h2>{title}</h2>
            </div>
            <div className="img">
                <img src={image_url} alt={title}/>
            </div>
            <p>Score: {score}</p>
            <p>Rated: {rated}</p>
        </div>
    )
}

export default AnimeCard
