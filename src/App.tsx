import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/home";

/**
 * URLS
 * set up the url as follow:
 *                 <Route path='/your-path' element={<YourPath/>}/>
 */
function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
