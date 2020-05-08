import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JobFilterProvider } from './JobFilter/JobFilterProvider';
import FilterCard from './JobFilter/FilterCard';

function App() {
  return (
    <div className="App">
      <JobFilterProvider>
        <FilterCard categoryTitle={"Job Kategori"}/>
      </JobFilterProvider>
    </div>
  );
}

export default App;
