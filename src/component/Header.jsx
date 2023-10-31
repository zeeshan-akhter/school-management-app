import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="logo">School Management App</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/class">Class view</NavLink>
      </nav>
    </>
  );
}
