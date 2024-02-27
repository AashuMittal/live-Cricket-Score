import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom

import Navbar from './Components/Navbar';
import LiveScore from './Components/LiveScore';
import AllMatch from './Components/AllMatch';
import PointTable from './Components/PointTable';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Wrap your Routes in a Routes component */}
        <Route path="/live-score" element={<LiveScore />} /> {/* Use element prop to specify component */}
        <Route path="/match" element={<AllMatch />} /> {/* Use element prop to specify component */}
        <Route path="/point-table" element={<PointTable />} /> {/* Use element prop to specify component */}
        <Route path="/" element={<Home/>} /> {/* Use element prop to specify component */}
      </Routes>
    </Router>
  );
};

export default App;
