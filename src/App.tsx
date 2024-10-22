import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Stores';
import Visits from './pages/Visits';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="md:ml-64 pb-16 md:pb-0">
          <Header />
          <div className="p-4 md:p-6 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/visits" element={<Visits />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;