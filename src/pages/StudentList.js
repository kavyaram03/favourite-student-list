
import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const { students, favorites, addFavorite } =
    useContext(StudentContext);

  return (
    <div className="container">
      <h1>List of Students</h1>
      <p className="subtitle">
        Add your favourite students to your list.
      </p>

      <div className="student-list">
        {students.map((student) => {
          const isFavorite = favorites.some(
            (item) => item.id === student.id
          );

          return (
            <div className="student-card" key={student.id}>
              <div className="student-info">
                <h3>{student.name}</h3>
                <p>Roll Number: {student.id}</p>
              </div>

              <button
                className="add-btn"
                disabled={isFavorite}
                onClick={() => addFavorite(student)}
              >
                {isFavorite
                  ? "Added to Favourite"
                  : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
