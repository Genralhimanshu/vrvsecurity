import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserManagement/UserList";
import RoleList from "./components/RoleManagement/RoleList";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/roles" element={<RoleList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
