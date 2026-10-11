
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import { StudentProvider } from "./context/StudentContext";

function App() {
  return (
    <StudentProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route
          path="/favorites"
          element={<FavouriteStudents />}
        />
      </Routes>
    </StudentProvider>
  );
}

export default App;
