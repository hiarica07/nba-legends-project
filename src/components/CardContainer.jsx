import React from 'react';
import PlayerCard from './PlayerCard';
import data from "../helper/data";

const CardContainer = () => {
  return (
    <div>
      <div className="card-container">
        {data.map((item) => (
          <PlayerCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
