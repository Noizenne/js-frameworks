import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Contact from './pages/contact';
import Checkout from './pages/checkout';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/GlobalStyles';
import Product from './pages/product';

const theme = {
  colors: {
    white: '#fff',
    pink: '#E891D5',
    lightPink: '#f7eaed',
    bg: '#F4F4F4',
    green: '#00C013'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
