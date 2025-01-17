import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Explore from '../../pages/Explore';


const index = () => {
    
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
            
);
};

export default index;
