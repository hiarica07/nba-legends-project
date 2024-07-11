import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import { data } from '../helper/data'; // data.js dosyasından veriyi import ediyoruz

const CardContainer = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Arama terimini saklayacak state

  // Arama kutusundaki değeri güncellemek için kullanılacak fonksiyon
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrelenmiş oyuncu listesini oluşturan fonksiyon
  const filteredPlayers = data.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Arama kutusu */}
      <div className="search-div">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange} // Arama kutusunda her değişiklikte tetiklenecek fonksiyon
        />
      </div>
      
      {/* Kartların listesi */}
      <div className="card-container">
        {filteredPlayers.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
