import React, { useState } from "react";
import '../App.css';

const PlayerCard = ({ name, img, statistics }) => {
  const [showStatistics, setShowStatistics] = useState(false);

  const toggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="player-card" onClick={toggleStatistics}>
      {!showStatistics ? (
        <>
          <img className="images" src={img} alt={name} />
          
        </>
      ) : (
        <div className="statistics">
          <ul>
            {statistics.map((stat, index) => (
              <li key={index}>{stat}</li>
            ))}
            
          </ul>
        </div>
      )}
      <h3>{name}</h3>
    </div>
  );
};

export default PlayerCard;
