import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          <button 
            className="hamburger-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <h1>Ariel Romano</h1>
          <div className="language-switcher-container">
            <LanguageSwitcher />
          </div>
        </div>
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#music" onClick={() => setIsMenuOpen(false)}>Music</a></li>
            <li><a href="#videos" onClick={() => setIsMenuOpen(false)}>Videos</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 