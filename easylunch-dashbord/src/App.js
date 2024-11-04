import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashbordlayout from './components/shared/Dashbordlayout';
import Dashboard from './components/Dashboard';
import IncomingOrder from './components/IncomingOrder';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashbordlayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="incomingorder" element={<IncomingOrder />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
