import { NavLink } from "react-router-dom";

export default function ListItem({ item, type, inClassView }) {
  return (
    <li key={item._id}>
      <NavLink to={`/${type}/${item._id}`}>

    
      <span>{item.name}</span> </NavLink>
      {item.marks && (
        <>
        <span>class: {item.grade}</span>
        
          
          {inClassView &&
          <>
          <span>Age: {item.age}</span>
          <span>Gender: {item.gender}</span>
          <span>Attendance : {item.attendance}</span>
          <span>Marks: {item.marks}/500</span>
          </>
          }
        </>
      )}
      {item.subject && (
        <>
          <span>Subject : {item.subject}</span>
        </>
      )} 
    </li>
  );
}
