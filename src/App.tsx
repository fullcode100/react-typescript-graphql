import React from 'react'; 
import { Route, Routes } from "react-router-dom"
import './App.css';
 import { CountrySearchPage } from './pages/CountrySearchPage/CountrySearchPage';
import { CountryPage } from './pages/CountryPage/CountryPage';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="App-mainContent">
         <Routes>
          <Route path="/" element={<CountrySearchPage />} />
           <Route path="/country/:countryCode" element={<CountryPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
