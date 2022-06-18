import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CreateUser } from "./CreateUser";
import Errorpage from "./Errorpage";
import Home from "./Home";
import Table from "./Table";
//import Pagination from "./component/Pagination";

function App() {
  return (
    <Router>
      <nav class="justify-content-center">
        <div class="justify-content-center">
          <h3>Users Website</h3>
          <Link to="/" class="btn btn-outline-success btn-sm">
            {" "}
            Home{" "}
          </Link>

          <Link to="/createusers" class="btn btn-outline-success btn-sm">
            {" "}
            CreateUser{" "}
          </Link>

          <Link to="/users" class="btn btn-outline-success btn-sm">
            {" "}
            Users List{" "}
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Table />} />
        <Route path="/createusers" element={<CreateUser />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
