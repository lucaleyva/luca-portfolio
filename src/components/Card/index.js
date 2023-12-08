import React, { useEffect, useState } from 'react';
import './styles.css';

const Card = ({ card }) => (
    <div className="card">
      <img src={card.image} alt={card.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-name">{card.name}</h3>
        <p className="card-title">{card.title}</p>
        <p className="card-text">{card.text}</p>
      </div>
    </div>
  );

export default Card;
