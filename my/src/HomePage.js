import React from "react";


const HomePage = ({ students, setEditData, setStudents,navigate}) => {
  

  const handleDelete = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

  return (
    <div style={{textAlign:"center"}} >
      <h1 >Student Details</h1>
      {students.length === 0 ? (
        <div>
          <p >No student data available.</p>
          <button onClick={() => navigate("create")} style={{borderRadius:'10px',padding:'15px',backgroundColor:'black',color:'white',cursor:'pointer', fontSize:'16px'}}>Create New Student</button>
        </div>
      ) : (
        <div >
          <button style={{borderRadius:'10px',padding:'15px',backgroundColor:'black',color:'white',cursor:'pointer', fontSize:'16px'}}   onClick={() => navigate("create")}>Create New Student</button>
          <ul >
            {students.map((student) => (
              <li key={student.id}>
                <p>Name: {student.name}</p>
                <p>Email: {student.email}</p>
                <button style={{borderRadius:'10px',backgroundColor:'black',color:'white',cursor:'pointer', fontSize:'16px' ,margin:'20px'}} onClick={() => {
                  setEditData(student);
                  navigate("create");
                }}>Edit</button>
                <button style={{borderRadius:'10px',backgroundColor:'black',color:'white',cursor:'pointer', fontSize:'16px'}} onClick={() => handleDelete(student.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;