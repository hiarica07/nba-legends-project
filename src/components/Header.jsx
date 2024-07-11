import React from 'react'
import resim1 from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div>
        <div className="logo">
            <img src={resim1} alt="logo" />
            <h1>NBA Legends</h1>
        </div>
    </div>
  )
}

export default Header