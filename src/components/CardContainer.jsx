import React, { useState } from 'react'
import PlayerCard from './PlayerCard'
import { data } from "../helper/data"



const CardContainer = () => {

    const [search, setSearch] = useState("")

    const handleSearchChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const handleClearSearch = () => {
        setSearch("");
      };

    const filteredPlayers = data.filter((e)=> e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    
    
  return (
    <div>
        <div className='search-box'>
            <input 
                type="text" 
                id="" 
                placeholder="Search for a player..."
                className='search-input'
                value={search}
                onChange={handleSearchChange}
            />
            {search && (
          <span
            className='clear-icon'
            onClick={handleClearSearch}            
          >
            &times;
          </span>
        )}
        </div>
        <div className="card-container">
        {filteredPlayers.map((player, index)=>(
            <PlayerCard key={index} {...player}/>
        ))}
            
        </div>
    </div>
  )
}

export default CardContainer