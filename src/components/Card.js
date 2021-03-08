import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'

function Card({title, imageSource, text, url}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} className="card-img-top" alt="image1"></img>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque debitis aliquid magni adipisci eveniet rerum, exercitationem eius, minima voluptatibus quo ea reiciendis odio quisquam quaerat dignissimos facere hic commodi at!'
                    }
                </p>
                <a href={url} target="_blank" className="btn btn-outline-secondary rounded-0">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card
