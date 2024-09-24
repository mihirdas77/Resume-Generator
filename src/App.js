import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import { ResumeProvider } from './Context';
import './App.css';
import Navbar from './components/Layouts/Navbar';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import Builder from './components/Builder'; // Ensure correct import for Builder
import About from './components/About'; // Import the About component

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins'],
      },
    });
  }, []);

  return (
    <ResumeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Header />} />
          {/* Main Page */}
          <Route path="/main" element={<Main />} />
          {/* Resume Builder Page */}
          <Route path="/builder" element={<Builder />} />
          {/* About Page */}
          <Route path="/about" element={<About />} />
          {/* 404 Not Found Page */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        <Footer />
      </Router>
    </ResumeProvider>
  );
}

export default App;
