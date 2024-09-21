import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import { ResumeProvider } from './Context';
import './App.css';
import Navbar from './components/Layouts/Navbar';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import Builder from './components/Builder'; // Ensure the correct import for Builder

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
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/main" element={<Main />} />
          <Route path="/builder" element={<Builder />} />
          {/* Optional: Add a fallback route for undefined paths */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        <Footer />
      </Router>
    </ResumeProvider>
  );
}

export default App;
