
import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
  const { favorites, removeFavorite } =
    useContext(StudentContext);

  return (
    <div className="container">
      <h1>Favourite Students</h1>
      <p className="subtitle">
        Your selected favourite students.
      </p>

      {favorites.length === 0 ? (
        <p className="empty-message">
          No favourite students added yet.
        </p>
      ) : (
        <div className="student-list">
          {favorites.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="student-info">
                <h3>{student.name}</h3>
                <p>Roll Number: {student.id}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFavorite(student.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudents;
