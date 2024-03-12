import React from 'react';

function Card({ title, copy, buttonText }) {

    return (
        <div className="card">
        <div className="content">
            <h2 className="titles" >{title}</h2>
            <p className="copy">{copy}</p>
            <button className="card__btn">{buttonText}</button>
        </div>
        </div>
    );
}

export default Card;
  