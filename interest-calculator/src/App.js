import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InterestDetails from './components/InterestDetails';
import InterestForm from './components/InterestForm';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Customize your primary color
        },
        secondary: {
            main: '#dc004e', // Customize your secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
                <div className="container my-3">
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
