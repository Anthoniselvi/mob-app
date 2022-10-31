import React from "react";
import RegisterPage from "./component/Register";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import CreateEvent from "./component/CreateEvent";
import AddEntry from "./component/AddEntry";
import EntryList from "./component/EntryList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Switch } from "react-switch";

function App() {
  return Login();
  // return RegisterPage();
  // return Dashboard();
  // return CreateEvent();
  // return AddEntry();
  // return EntryList();

  // return (
  //   <Router>
  //     {/* <div className="container"> */}
  //     <Login />
  //     <Routes>
  //       <Route path="/Register">
  //         <RegisterPage />
  //       </Route>
  //       <Route path="/Dashboard">
  //         <Dashboard />
  //       </Route>
  //       <Route path="/CreateEvent">
  //         <CreateEvent />
  //       </Route>
  //       <Route path="/AddEntry">
  //         <AddEntry />
  //       </Route>
  //       <Route path="EntryList">
  //         <EntryList />
  //       </Route>
  //     </Routes>
  //     {/* </div> */}
  //   </Router>
  // );
}

export default App;
