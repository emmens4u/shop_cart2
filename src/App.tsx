import React, { useEffect, useState, useReducer } from 'react';
import './App.css';
import { ctx } from './context';
import {reducerFn, initialState} from './reducer'
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ProductDetail } from './pages/ProductDetail';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';

function App() {
// want to access context provider so we can wrap around our app
const [state, dispatch] = useReducer(reducerFn, initialState)
  console.log("state", state);


  // ueEffect for calling the api.... fetch & dispatch
  useEffect (() =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>dispatch({type: "ADD_PRODUCTS", payload: data}))
  }, [])

  return (
    <ctx.Provider value={state}>
    <>
      <BrowserRouter>
        <Header>
        <Routes>
          <Route  path='/' element={ <Home />}/>
          <Route path ='products/:title' element={<ProductDetail dispatch={dispatch}/>}  />
          <Route path ='/cart' element={<Cart />} />
        </Routes>
        </Header>
      </BrowserRouter>
    </>
    </ctx.Provider>
  );
}

export default App;
