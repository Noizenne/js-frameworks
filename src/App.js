import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';
import CartIcon from './components/layout/Cart';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/GlobalStyles';

const theme = {
  colors: {
    nav: '#5A6C8E',
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
        <Route path='/src/pages/products' element={<Products />} />
        <Route path='/src/pages/products/:id'></Route>
        <Route path='/src/pages/contact' element={<Contact />} />
        <Route path='/src/pages/checkout' element={<CartIcon />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
