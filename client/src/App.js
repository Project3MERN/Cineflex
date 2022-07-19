import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";

// pending apollo client

function App() {
  return (
    <Router>  
      <div>
        <Header />
        <Routes>
          {/* insert routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
