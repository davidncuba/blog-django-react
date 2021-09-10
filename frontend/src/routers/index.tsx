import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import Posts from "../pages/Post";
import PostList from "../pages/PostList";

export default function Routers() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />

      <Route exact={true} path="/post" component={Posts} />
      <Route exact={true} path="/post/:slug" component={Posts} />

      <Route path="/404" component={Page404} />
      <Route exact={true} path="/category" component={PostList} />
      <Route exact={true} path="/category/:category" component={PostList} />

      <Route path="*" exact={true} component={Page404} />
    </Switch>
  );
}
