import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "../pages/Posts";

export default function Routers() {
  return (
    <Switch>
      <Route path="/:slug">
        <Posts />
      </Route>
    </Switch>
  );
}
