import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside>
    <ul>
      <li><Link to="/users">User Management</Link></li>
      <li><Link to="/roles">Role Management</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
