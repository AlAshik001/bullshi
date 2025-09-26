import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MacbookPro } from "./screens/MacbookPro/MacbookPro";
import { Services } from "./screens/Services/Services";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MacbookPro />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};