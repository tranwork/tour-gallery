// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

import React from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><span className="price">${price}</span></p> 
      <p>{info}</p>
      <button onClick={() => onRemove(id)}>Not Interested</button>
    </div>
  );
}

export default TourCard;
