"use client"

import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <img src='' alt='Logo' />
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
      <div className='right'>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
