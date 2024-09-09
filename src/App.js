import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { ScrollProvider } from './components/ScrollContext';

function App() {
  
  return (
    <Router basename='/'>
      <ScrollProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} /> 
            </Routes>
          </main>
          <div>
            <Footer />
          </div>
        </div>
      </ScrollProvider>
    </Router>
  );
}

export default App;