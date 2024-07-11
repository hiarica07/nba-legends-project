import React from 'react'
import resim1 from "../assets/cool-nba-logo-wallpaper-preview.jpg"

const Header = () => {
  return (
    <div>
        <div className='logo'>
            <img src={resim1} alt="" />
            <h1>NBA Legends</h1>
        </div>
    </div>
  )
}

export default Header