import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next'; // Import i18n to access the current language
import './Navbar.css';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          {i18n.language === 'en' ? (
            <span>{t('welcome')} Interest<small><sub>Mint.com</sub></small></span>
          ) : (
            <span>Interest<small><sub>Mint.com</sub></small>{t('welcome')}</span>
          )}
          <h6>{t('slogan')}</h6>
        </div>
      </nav>
    </div>
  );
}
