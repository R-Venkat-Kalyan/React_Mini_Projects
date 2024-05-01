import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import InterestForm from './components/InterestForm';
import InterestDetails from './components/InterestDetails';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container my-3">
                    <InterestForm />
                    <Routes>
                        <Route path="/interest-details" element={<InterestDetails />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
