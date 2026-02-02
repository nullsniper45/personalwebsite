import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    // <div className="App">
      
    //   <HeroSection 
    //     darkMode = {darkMode}
    //     setDarkMode = {setDarkMode}
    //   />
    // </div>
    <BrowserRouter>
    <Navbar 
        darkMode = {darkMode}
        setDarkMode = {setDarkMode}
      />
      <Routes>
        <Route path="/" element={<HeroSection darkMode = {darkMode}
        setDarkMode = {setDarkMode}/>} />
        <Route path="/personalwebsite" element={<HeroSection darkMode = {darkMode}
        setDarkMode = {setDarkMode}/>} />
        <Route path="/home" element={<HeroSection darkMode = {darkMode} setDarkMode = {setDarkMode}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume darkMode = {darkMode} setDarkMode = {setDarkMode}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
