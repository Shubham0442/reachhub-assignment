import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, RatingHistory, Signup, Players } from "../Pages";
import ProtectedRoute from "../HOC/ProtectedRoute";

const AllRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Players />
        </ProtectedRoute>
      }
    />
    <Route
      path="/:username"
      element={
        <ProtectedRoute>
          <RatingHistory />
        </ProtectedRoute>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

export default AllRoutes;
