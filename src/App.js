import React from "react";

import "./App.css";
import { MenuBar } from "./container";
import { PublicRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <PublicRoutes />
    </div>
  );
}

export default App;
