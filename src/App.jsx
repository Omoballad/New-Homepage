import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Portifiolo from "./Portifiolo";
import Inner from "./Inner";
import Consultation from "./Consultation";
import About from './About';
import Waitlist from "./Waitlist";
import Subscription from "./Subscription";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/portifiolo" element={<Portifiolo />} />
          <Route path="/inner" element={<Inner />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/subscription" element={<Subscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
