import React from 'react';
import { Header } from './components/Header'
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers /> 
    </BrowserRouter>
  )
}
export default App;