import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`text-sm ${i18n.language === 'en' ? 'font-bold' : 'text-gray-600'}`}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => changeLanguage('es')}
        className={`text-sm ${i18n.language === 'es' ? 'font-bold' : 'text-gray-600'}`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher; 