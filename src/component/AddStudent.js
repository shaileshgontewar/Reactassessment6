import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { store } from "./Details";

const AddStudent = () => {
  let navigate = useNavigate();
  const [student, setStudent] = useContext(store);
  const { id } = useParams();
  let [details, setDetails] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
    batch: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventdefault();
    if (id === undefined) {
      let newDetails = { ...details, id: new Date().getTime().toString() };
      setStudent({ ...student, newDetails });
    } else {
      setStudent((prevstate) =>
        prevstate.map((student) =>
          student.id === id
            ? {
                id: id,
                name: details.name,
                age: details.age,
                course: details.course,
                batch: details.batch,
              }
            : student
        )
      );
    }
    navigate("/Student");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex-container">
          <div className="c-1">
            <input
              type="text"
              name="name"
              value={details.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={details.age}
              onChange={handleChange}
            />
          </div>
          <div className="c-2">
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={details.course}
              onChange={handleChange}
            />
            <input
              type="text"
              name="batch"
              placeholder="Batch"
              value={details.batch}
              onChange={handleChange}
            />
          </div>{" "}
        </div>
        <div className="btn-container">
          <Link to="/Student" className="btn-danger">
            Cancel
          </Link>{" "}
          <Link to="/Student" type="submit">
            {" "}
            Submit
          </Link>{" "}
        </div>
      </form>
    </>
  );
};
export default AddStudent;
