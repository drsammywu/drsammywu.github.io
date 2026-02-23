import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import CancerRehab from './pages/CancerRehab';
import Research from './pages/Research';
import MakeAppointment from './pages/MakeAppointment';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cancer-rehabilitation" element={<CancerRehab />} />
          <Route path="/research" element={<Research />} />
          <Route path="/appointment" element={<MakeAppointment />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
