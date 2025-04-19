import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <h2>{t('contact.title')}</h2>
      <p className="description">{t('contact.description')}</p>
    </section>
  )
}

export default Contact 