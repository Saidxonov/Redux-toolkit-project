import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo";
import Shop from "./pages/shop";
import CRUD from "./pages/CRUD";

function App() {
  return (
    <>
      <MainLayout />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <ToDo />
            </MainLayout>
          }
        />
        <Route
          path="/crud"
          element={
            <MainLayout>
              <CRUD />
            </MainLayout>
          }
        />
        <Route
          path="/shop"
          element={
            <MainLayout>
              <Shop />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
