import './assets/scss/app.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Login from './components/pages/Login/Login'
import Register from './components/pages/Register/Register'
import Page1 from './components/pages/Page1/Page1'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Navigate to="/login" replace={true} />}/>    {/* la página default será Login, Navigate sirve para redireccionar */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/page1' element={<Page1 />} />
          
          {/* Agregar aqui la ruta a los componentes que se vayan importando.   /inicio es como aparecerá en el URL de la página */}
        </Routes>
        {/* <footer>
          <MenuFooter />
          <Footer />
        </footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
