import "./App.css";
import "./component/Style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Student from "./component/Student";
import Details from "./component/Details";
import AddStudent from "./component/AddStudent";

function App() {
  return (
    <Details>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Student" element={<Student />}></Route>
            <Route path="/add-student" element={<AddStudent />}></Route>
            <Route path="/add-student/:id" element={<AddStudent />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Details>
  );
}

export default App;
