import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';
import Cart from './pages/cart';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/GlobalStyles';

const theme = {
  colors: {
    nav: '#000',
    color: '#fff'
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='/src/components/pages/products' element={<Products />} />
        <Route path='/src/components/pages/contact' element={<Contact />} />
        <Route path='/src/components/pages/cart' element={<Cart />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
