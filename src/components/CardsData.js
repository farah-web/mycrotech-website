import React, { useState, useEffect } from 'react'


function CardsData(props) {

    return (
        <>
            <img src={props.url} className="card-img-top imgSize" alt="Service Image" />
                    <div className="card-body">
                        <h5 className="id-align card-title titleSize">CARD ID: {props.id}</h5>
                        <h5 className="card-title titleSize">{props.title}</h5>
                        <p className="card-text textSize">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
        </>
    )
}

export default CardsData