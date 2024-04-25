// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#002D62'
      showAlert("Dark Mode Enabled !!")
      document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        document.title = "TextUtils is Amazing"
      }, 2000)

      setInterval(() => {
        document.title = "Use TextUtils"
      }, 1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled !!")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <BrowserRouter>
        {/* calling navbar component by passing props */}
        <Navbar title="MyTextUtils" about="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
