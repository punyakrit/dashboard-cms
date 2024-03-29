import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import UserWaitingList from "./pages/UserWaitingList";
import TotalUser from "./pages/TotalUser";
import ModifyUser from "./pages/ModifyUser";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";

// import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/User-Approval" element={<UserWaitingList />} />
            <Route path="/Total-User" element={<TotalUser />} />
            <Route path="/Modify-User" element={<ModifyUser />} />

            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
