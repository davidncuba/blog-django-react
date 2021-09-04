import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";

export default function Routers() {
  return (
    <Switch>
      <Route path="/:slug">
        <About />
      </Route>
    </Switch>
  );
}
