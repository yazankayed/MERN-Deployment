import React, {  useState,useEffect } from 'react';
import StoreList from './components/StoreList';
import StoreDetails from './components/StoreDetails';
import StoreUpdate from './components/StoreUpdate';
import StoreForm from './components/StoreForm';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1>Store Finder</h1>
            <Routes>
            <Route path="/" element={< StoreList />} />
            <Route path="/stores/add" element={<StoreForm />} />
            <Route path="/stores/:id" element={<StoreDetails />} />
            <Route path="/stores/edit/:id" element={<StoreUpdate />} />
            </Routes>
      </header>
    </div>
  );
}

export default App;
