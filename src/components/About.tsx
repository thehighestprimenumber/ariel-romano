import React from 'react'
import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <h2>{t('about.title')}</h2>
      <div className="bio">
        <p>{t('about.description')}</p>
        <p>{t('about.bio')}</p>
      </div>
    </section>
  )
}

export default About 