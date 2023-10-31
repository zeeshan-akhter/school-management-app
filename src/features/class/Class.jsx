import { useSelector } from "react-redux";
import ListItem from "../../component/ListItems";
import { useState } from "react";
export default function Class() {
  const { students } = useSelector((state) => state?.students);
  const { status } = useSelector((state) => state?.students);
  const [filter, setFilter] = useState({
    grade: "",
    gender: "",
    category: "",
  });
  const classCategorised = filter.grade
    ? students?.filter((item) => item.grade === filter.grade)
    : students;

  const genderData = filter.gender
    ? classCategorised.filter((item) => item.gender === filter.gender)
    : classCategorised;
  const sortedData = filter.category
    ? [
      ...[...genderData].sort(
        (a, b) => { return filter.category === "name" ? a.name.localeCompare(b.name) : a[filter.category] - b[filter.category] }
      ),
    ]
    : genderData;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "grade") setFilter({ ...filter, [name]: Number(value) })
    else setFilter({ ...filter, [name]: value });
  };

  return (
    <>
      <h1>Class View</h1>

      <select name="grade" id="class" onChange={onChangeHandler}>
        <option value="">Select Class</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select name="gender" id="gender" onChange={onChangeHandler}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>

      <select name="category" id="" onChange={onChangeHandler}>
        <option value="">Sort by category</option>
        <option value="name">name</option>
        <option value="age">age</option>
        <option value="marks">marks</option>
        <option value="attendance">attendance</option>
      </select>

      <div>
        {status === "loading" && <div className="loader"></div>}
        <ul>
          <h4>List of Students</h4>
          {sortedData.length>=1 && sortedData?.map((item) => (
            <ListItem item={item} type={"student"} inClassView={true} />
          ))}
         <li>
         {
            sortedData.length === 0 && <div>No students found with these filters</div>
          }
         </li>
        </ul>
      </div>
    </>
  );
}
