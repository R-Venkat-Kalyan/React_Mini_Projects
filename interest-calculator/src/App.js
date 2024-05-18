import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InterestDetails from './components/InterestDetails';
import InterestForm from './components/InterestForm';
import './i18n';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container my-3">
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="te">తెలుగు</option>
            <option value="or">ଓଡ଼ିଆ</option>
          </select>
          <Routes>
            <Route path="/" element={<InterestForm />} />
            <Route path="/interest" element={<InterestDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
