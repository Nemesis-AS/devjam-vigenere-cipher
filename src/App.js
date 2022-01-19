import {  useState } from 'react';

import './App.css';

import Encrypt from './components/Encrypt';
import Decrypt from './components/Decrypt';
import Compare from './components/Compare';

function App() {
  const [currentTab, setCurrentTab] = useState("encrypt");

  return (
    <div className="App">
      <div className="title">Vigenère Cipher</div>
      <nav className="flex justify-center items-center mb-4">
          <button className={`nav-btn ${currentTab === "encrypt" && "current"}`} onClick={() => setCurrentTab("encrypt")}>
            Encrypt
          </button>
          |
          <button className={`nav-btn ${currentTab === "decrypt" && "current"}`} onClick={() => setCurrentTab("decrypt")}>
            Decrypt
          </button>
          |
          <button className={`nav-btn ${currentTab === "compare" && "current"}`} onClick={() => setCurrentTab("compare")}>
            Compare
          </button>
      </nav>
      <main className="flex justify-center">
        {currentTab === "encrypt" ? <Encrypt/> : currentTab === "decrypt" ? <Decrypt/> : <Compare />}
      </main>

      <footer className="credit">
        Made by <a href="gtihub.com/Nemesis-AS">Nemesis&trade;</a> for <a href="https://devjam.vercel.app/">Dev Jam</a>
      </footer>
    </div>
  );
}

export default App;
