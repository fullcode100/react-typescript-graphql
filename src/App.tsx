import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Intro } from './features/intro/Intro';
import { Route, Routes } from "react-router-dom"
import './App.css';
import { CountryInput } from './features/countryInput/CountryInput';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="App-mainContent">
        {/*<Intro  />*/}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/country" element={<CountryInput />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
