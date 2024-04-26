
// import './App.css';
import Footer from './components/Footer';
import InterestForm from './components/InterestForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container my-3">
      <InterestForm></InterestForm>
      </div>  
      <Footer></Footer>
    </div>
  );
}

export default App;
