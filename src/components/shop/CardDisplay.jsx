import React from 'react'

const CardDisplay = ({ initialProductData }) => {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={`${initialProductData.image}`} alt="Product Image" />
          </figure>
        </div>
  
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{initialProductData.name}</p>
            </div>
          </div>
  
          <div className="content">{initialProductData.description}</div>
        </div>
      </div>
    );
  };

export default CardDisplay