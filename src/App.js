import React from 'react';
import './App.css';
import FilterableProductTable from './components/Filterable-product-table/FilterableProductTable';
import productsData from "./data.json"
function App() {
  return (
    <div className="App">
      <FilterableProductTable/>
    </div>
  );
}

export default App;
