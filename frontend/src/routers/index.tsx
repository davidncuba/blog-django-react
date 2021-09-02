import React from "react";
import { BrowserRouter as Switch, Route, } from "react-router-dom";
import About from "../pages/About";


export default function Routers() {
    return (
  
        <Switch>
          <Route exact path="/about" component={About}>
      
          </Route>
        </Switch>

    )
}