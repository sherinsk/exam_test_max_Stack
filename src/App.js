import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page1 from './page1';
import Page2 from './page2'

const App = () => {
  return (
    <Router>
      <div className='container-fluid'>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/:id" element={<Page2 />} />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;
