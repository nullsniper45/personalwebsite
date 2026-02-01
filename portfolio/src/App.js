import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Navbar 
        darkMode = {darkMode}
        setDarkMode = {setDarkMode}
      />
      <HeroSection 
        darkMode = {darkMode}
        setDarkMode = {setDarkMode}
      />
    </div>
  );
}

export default App;
