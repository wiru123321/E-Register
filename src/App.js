import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Component/MainPage/MainPage";
import AddStudent from "./container/AddStudent/AddStudent";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/addStudent" component={AddStudent} />
          <Route path="/" component={""} />
          <Route path="/" component={""} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
