import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="nav1">
      <h5>&copy; {t('Copyright')} 2024 by Interest<sub>mint.</sub></h5>
      <h6>{t('designed_by')} <a href="https://r-venkat-kalyan.github.io/" target="_blank" className="footer-link">Reddy Venkat Kalyan.</a></h6>
    </div>
  );
}
