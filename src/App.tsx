import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/counter/Counter';
import { Intro } from './components/intro/Intro';
import { Route, Routes } from "react-router-dom"
import './App.css';
import { CountryInput } from './components/countryInput/CountryInput';
import { CountryPage } from './pages/CountryPage';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="App-mainContent">
        {/*<Intro  />*/}
        <Routes>
          <Route path="/" element={<CountryPage />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/country" element={<CountryPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
