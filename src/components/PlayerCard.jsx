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
          <h3>{name}</h3>
        </>
      ) : (
        <div className="statistics">
          <ul>
            {statistics.map((stat, index) => (
              <li key={index}>{stat}</li>
            ))}
            <h3>{name}</h3>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
