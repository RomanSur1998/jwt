import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <NavScrollExample />
      <MainRoutes />
    </div>
  );
};

export default App;
