import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Ariel Romano</h1>
      <nav className="main-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 