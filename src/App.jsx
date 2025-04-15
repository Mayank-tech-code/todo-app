import { Route, Routes } from "react-router-dom";
import GetUser from "./components/getUser";
import AddUser from "./components/addUser";
import UpdateUser from "./components/updateUser";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
