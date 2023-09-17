import React from 'react'
import  './header.css'

const Header = () => {
  return (
    <header class="header">
    <a class="logo" href="#home">
      <h2>AlanDEV</h2>
    </a>
    <nav class="navbar">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT ME</a>
      <a href="#portfolio">PORTFOLIO</a>
    </nav>
  
    <button class="btn">
      Get in touch
    </button>
  </header>
  
  )
}

export default Header
