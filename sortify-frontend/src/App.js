import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Landing from './pages/landing'

function App() {
  return (
    <Router>  {/* Wrap Routes with Router */}
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Default route rendering Landing component */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
