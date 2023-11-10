import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import EventList from "./components/EventList"; // Assuming this is a protected component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <EventList />
            </ProtectedRoute>
          }
        />
        {/* Other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
