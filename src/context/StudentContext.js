
import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students] = useState([
    { id: 101, name: "Arun Kumar" },
    { id: 102, name: "Priya Sharma" },
    { id: 103, name: "Karthik Raj" },
    { id: 104, name: "Divya" },
    { id: 105, name: "Rahul" },
    { id: 106, name: "Sneha" },
  ]);

  const [favorites, setFavorites] = useState([]);

  const addFavorite = (student) => {
    const alreadyExists = favorites.some(
      (item) => item.id === student.id
    );

    if (!alreadyExists) {
      setFavorites((prevFavorites) => [
        ...prevFavorites,
        student,
      ]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((student) => student.id !== id)
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
