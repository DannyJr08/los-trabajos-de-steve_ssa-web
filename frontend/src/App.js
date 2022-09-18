import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Login from './components/pages/Login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Navigate to="/login" replace={true} />}/>    {/* la página default será Login, Navigate sirve para redireccionar */}
          <Route path='/login' element={<Login />} />
          
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
