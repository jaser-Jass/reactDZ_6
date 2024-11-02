import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <h1>Управление каталогом продуктов</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default App;
