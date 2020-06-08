import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Component/MainPage/MainPage";
import AddStudent from "./container/AddStudent/AddStudent";
import ShowStudents from "./container/ShowAllStudents/ShowAllStudents";
import FindStudent from "./container/FindStudent/FindStudent";
import "./container/AddStudent/AddStudent.css";
import ShowSubject from "./container/ShowSubject/ShowSubject";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#cefff1", width: "100%", height: "100vh" }}
    >
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/addStudent" component={AddStudent} />
          <Route path="/showStudents" component={ShowStudents} />
          <Route path="/findStudent" component={FindStudent} />
          <Route path="/showSubject" component={ShowSubject} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
