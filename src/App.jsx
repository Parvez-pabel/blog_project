import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ByCatPage from "./Pages/ByCatPage";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      {/* Your routes here */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/byCategory/:categoryID" element={<ByCatPage />} />
        <Route path="/post-details/:postID" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
