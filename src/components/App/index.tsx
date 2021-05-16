import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home";
import GlobalStyles from "src/components/GlobalStyles";
const App = (): ReactElement => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
