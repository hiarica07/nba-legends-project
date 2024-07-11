import PlayerCard from './PlayerCard';
import  { data }  from '../helper/data'; 
import { useState } from 'react';

const CardContainer = () => {

 const [search, setSearch] = useState("")

 const handleSearchChange = (e) => {
  // console.log(e.target.value)
  setSearch(e.target.value);
};
const filteredPlayers = data.filter((e) =>
  e.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>

    <div className="search-box">
      <input
       type="text"
       placeholder='Search'
       className='search-input'
       value={search}
       onChange={handleSearchChange}
        />
        <div></div>
    </div>
    



    
    <div className="card-container">
        {filteredPlayers.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
      
      
      
      
      
      
      </div>

    
   
    
  );
};

export default CardContainer;
