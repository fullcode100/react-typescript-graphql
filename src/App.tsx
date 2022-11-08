import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/counter/Counter';
import { Intro } from './components/intro/Intro';
import { Route, Routes } from "react-router-dom"
import './App.css';
import { CountryInput } from './components/countryInput/CountryInput';
import { CountrySearchPage } from './pages/CountrySearchPage/CountrySearchPage';
import { CountryPage } from './pages/CountryPage/CountryPage';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="App-mainContent">
        {/*<Intro  />*/}
        <Routes>
          <Route path="/" element={<CountrySearchPage />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/country/:countryCode" element={<CountryPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
