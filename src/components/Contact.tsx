import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <h2>{t('contact.title')}</h2>
      <p className="description">{t('contact.description')}</p>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            {t('contact.send')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact 