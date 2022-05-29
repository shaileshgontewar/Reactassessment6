import React, { useContext } from "react";
import { store } from "./Details";
import { Link } from "react-router-dom";

const Student = () => {
  const [student] = useContext(store);
  return (
    <>
      <div className="heading">
        <h1>Student Details</h1>
        <Link to="/add-student">Add New Student</Link>{" "}
      </div>
      <div className="container mt-5" style={{ margin: "7 rem" }}>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Course</th>
              <th scope="col">Batch </th>
              <th scope="col">Change</th>
            </tr>
          </thead>
          <tbody>
            {student.map((student) => {
              return (
                <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>{student.batch}</td>
                  <td>
                    {" "}
                    {/* <Link to="/AddStudent">Edit</Link> */}
                    <Link to={`/add-student/${student.id}`}>Edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
