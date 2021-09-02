import React from 'react';
import { Header } from './components/Header'
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routers";

function App() {
  return (
    <Router>
      <Header />
     <Routers /> 
    </Router>
  )
}
export default App;