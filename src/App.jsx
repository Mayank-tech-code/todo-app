import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetUser from "./components/getUser";
import AddUser from "./components/addUser";
import UpdateUser from "./components/updateUser";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GetUser />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
