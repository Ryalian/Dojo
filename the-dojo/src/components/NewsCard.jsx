import React from 'react';

import "./NewsCard.css";

export default (props) => {

    return (
        <div className="news-card-container">
            <img src={props.src}></img>
            <p className="news-card-title">
                {props.title}
            </p>
        </div>
        )
}