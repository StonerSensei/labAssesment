import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Signup from './signup';

function App() {
    return (
        <Router>
            <nav>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
