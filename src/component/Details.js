import React, { createContext, useState } from "react";
export const store = createContext();

const Details = (props) => {
  const [student, setStudent] = useState([
    {
      name: "shailesh",
      age: "25",
      course: "REACT",
      batch: "January",
      id: "1",
    },
    // {
    //   Name: "Himanshu",
    //   Age: "22",
    //   Course: "CSS",
    //   Batch: "February",
    //   Id: "3",
    // },
    // {
    //   Name: "shubham",
    //   Age: "24",
    //   Course: "Java",
    //   Batch: "December",
    //   Id: "4",
    // },
    // {
    //   Name: "Praful",
    //   Age: "25",
    //   Course: "SQL",
    //   Batch: "Octomber",
    //   Id: "5",
    // },
  ]);
  return (
    <div>
      <store.Provider value={[student, setStudent]}>
        {props.children}
      </store.Provider>
    </div>
  );
};
export default Details;
