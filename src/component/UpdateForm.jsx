
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStudent } from "../features/students/studentSlice";
import { updateTeacherData } from "../features/teachers/teacherSlice";


export default function UpdateForm({type, data, onClose}){
  const [formData, setFormData] = useState(data);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(type === "student")
    dispatch(updateStudent({id:data._id, formData}));
  else dispatch(updateTeacherData({id:data._id, formData}))
    onClose()
  };
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  if(type === "student"){
    return    <form onSubmit={onSubmitHandler}>
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      placeholder="Name"
      name="name"
      required
      onChange={onChangeHandler}
      value={formData.name}
    />
  
    <label htmlFor="age">Age:</label>
    <input
      type="number"
      id="age"
      name="age"
      min={3}
      max={20}
      placeholder="Age"
      required
      onChange={onChangeHandler}
      value={formData.age}
    />
  
    <label htmlFor="gender">Gender:</label>
    <select
      id="gender"
      name="gender"
      required
      onChange={onChangeHandler}
      value={formData.gender}
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Not mention">Not Mention</option>
    </select>
  
    <label htmlFor="grade">Grade/Class:</label>
    <input
      type="number"
      id="grade"
      placeholder="Grade/Class"
      name="grade"
      min={1}
      max={12}
      required
      onChange={onChangeHandler}
      value={formData.grade}
    />
  
    <label htmlFor="attendance">Attendance:</label>
    <input
      type="number"
      id="attendance"
      placeholder="Attendance"
      name="attendance"
      min={0}
      max={300}
      required
      onChange={onChangeHandler}
      value={formData.attendance}
    />
  
    <label htmlFor="marks">Marks:</label>
    <input
      type="number"
      id="marks"
      placeholder="Marks"
      name="marks"
      min={0}
      max={500}
      required
      onChange={onChangeHandler}
      value={formData.marks}
    />
  
    <button>Update Student</button>
  </form>
  
  }
  else return <>
  <form onSubmit={onSubmitHandler}>
  <label htmlFor="name">Name</label>
  <input
    type="text"
    id="name"
    placeholder="Name"
    name="name"
    required
    value={formData.name}
    onChange={onChangeHandler}
  />

  <label htmlFor="contact">Contact</label>
  <input
    type="number"
    id="contact"
    name="contact"
    min={6000000000}
    max={9999999999}
    placeholder="Contact Number"
    required
    value={formData.contact}
    onChange={onChangeHandler}
  />

  <label htmlFor="subject">Subject</label>
  <select
    id="subject"
    name="subject"
    required
    value={formData.subject}
    onChange={onChangeHandler}
  >
    <option value="">Select subject</option>
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
    <option value="Mathematics">Mathematics</option>
    <option value="Social Science">Social Science</option>
    <option value="Science">Science</option>
    <option value="Computer">Computer</option>
    <option value="Physical Education">Physical Education</option>
    <option value="Sanskrit">Sanskrit</option>
  </select>

  <button>Update Teacher</button>
</form>

  </>

}