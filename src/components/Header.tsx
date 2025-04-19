import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <h1>Ariel Romano</h1>
      <LanguageSwitcher />
      <nav className="main-nav">
        <ul className="flex items-center gap-6">
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 