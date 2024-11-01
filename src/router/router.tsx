import { Route, Routes as Switch } from "react-router-dom";

import Routes from "./routes";
import { LayoutPage } from "../layouts";
import { Blog } from "../pages";

const Router = () => (
  <Switch>
    <Route element={<LayoutPage />}>
      <Route path={Routes.ROOT} element={<Blog />} index={true} />
    </Route>
    <Route path="*" element={<div>Page not Found!!!</div>} />
  </Switch>
);

export default Router;
