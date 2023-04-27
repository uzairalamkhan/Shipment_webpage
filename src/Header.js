import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className='to-left'>
      <div className='mainhead' id='mainh'> 
      <img className='logo' src='https://cdn-icons-png.flaticon.com/512/3143/3143267.png' />
      <div>Teleport Shipments </div>
      </div>
      <div className='home' > Home</div>
      <div className='cnt'> Contact us</div> 
      </div> 
      <div className='to-right'>
        <button className='login'>Login</button>
        <button className='sign' >Sign up</button>
      </div> 
    </div>
  )
}

export default Header;
