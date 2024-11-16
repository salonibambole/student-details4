import React, { useState, useEffect } from "react";



const CreatePage = ({ students, setStudents, editData, setEditData ,navigate}) => {
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    collegeName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
  });


  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      const updatedStudents = students.map((student) =>
        student.id === editData.id ? { ...form, id: student.id } : student
      );
      setStudents(updatedStudents);
    } else {
      setStudents([...students, { ...form, id: Date.now() }]);
    }
    setEditData(null);
    navigate("home");
  };

  return (
    <div style={{ borderRadius:'15px', backgroundColor:'#fff', padding:'20px'}}>
      <h1 style={{color:'black', marginBottom:'20px',textAlign:'center'}}>{editData ? "Edit Student" : "Create New Student"}</h1>
      <form style={{}} onSubmit={handleSubmit}>
        <label style={{display:'block',marginBottom:'5px',color:'#555',fontWeight:'bold'}}>Name:</label>
        <input style={{width:'100%',marginBottom:'15px', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br></br>
        <br></br>
        
        <label  style={{display:'block',marginBottom:'5px',color:'#555',fontWeight:'bold'}}>Father Name:</label>
        <input style={{width:'100%',marginBottom:'15px', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="text" name="fatherName" placeholder="Father Name" value={form.fatherName} onChange={handleChange} required /><br></br>
        <br></br>
        
        <label  style={{display:'block',marginBottom:'5px',color:'#555',fontWeight:'bold'}}> College Name:</label>
        <input style={{width:'100%',marginBottom:'15px', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="text" name="collegeName" placeholder="College Name" value={form.collegeName} onChange={handleChange} required /><br></br>
        <br></br>
        
        <label  style={{display:'block',marginBottom:'5px',color:'#555',fontWeight:'bold'}}>DOB:</label>
        <input style={{width:'100%',marginBottom:'15px', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="date" name="dob" value={form.dob} onChange={handleChange} required /><br></br>
        <br></br>
        
        <label  style={{display:'block',marginBottom:'5px',color:'#555',fontWeight:'bold'}}>Gender:</label>
        <select style={{width:'100%',marginBottom:'15px', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px', backgroundColor:'white'}}  id="gender" name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select> <br></br>
        <br></br>
        <label  style={{display:'block',marginBottom:'5px',color:'#555',fontWeight:'bold'}}>PhoneNo.:</label>
        <input style={{width:'100%',marginBottom:'15px', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="text" name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} required /><br></br>
        <br></br>
        <label  style={{display:'block',marginBottom:'5px',color:'#555',fontWeight:'bold'}}>Email:</label>
        <input style={{width:'100%',marginBottom:'5px', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <button  type="submit" style={{margin:'200px', padding:'15px',borderRadius:'10px',border:'none',backgroundColor:'black',color:'white', cursor:'pointer',fontSize:'16px'}}>{editData ? "Update" : "Submit"}</button>
        <button type="submit" style={{borderRadius:'10px',padding:'15px',backgroundColor:'black',color:'white',cursor:'pointer', fontSize:'16px'}} onClick={() => navigate("/")} >Cancel</button>
      </form>
    </div>
  );
}; 

export default CreatePage;
