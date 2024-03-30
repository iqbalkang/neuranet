import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />}>
        <Route index element={<Home />} />
        {/* <Route path='places/:placeId' element={<SinglePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
