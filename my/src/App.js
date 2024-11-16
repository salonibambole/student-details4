import React, { useState } from "react";
import HomePage from "./HomePage";
import CreatePage from "./CreatePage";


const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Tracks the current page
  const [students, setStudents] = useState([]); // List of students
  const [editData, setEditData] = useState(null); // Data for editing

  // Navigate function to switch between pages
  const navigate = (page) => setCurrentPage(page);

  return (
    <div>

      {currentPage === "home" ? (
        <HomePage
          students={students}
          setStudents={setStudents}
          setEditData={setEditData}
          navigate={navigate}
        />
      ) : (
        <CreatePage
          students={students}
          setStudents={setStudents}
          editData={editData}
          setEditData={setEditData}
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default App;